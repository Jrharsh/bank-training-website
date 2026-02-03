import fs from 'fs';

const src = 'public/js/static-scenarios.js';
const data = fs.readFileSync(src, 'utf8');

function findMatchingParen(s, i) {
  let depth = 0;
  for (let k = i; k < s.length; k++) {
    if (s[k] === '(') depth++;
    else if (s[k] === ')') {
      depth--;
      if (depth === 0) return k;
    }
  }
  return -1;
}

function unquote(str) {
  if (!str) return str;
  str = str.trim();
  if ((str[0] === '"' && str[str.length-1] === '"') || (str[0]==='\'' && str[str.length-1]==='\'')) {
    return str.slice(1,-1);
  }
  return str;
}

const results = [];
let idx = 0;
while (true) {
  const qIdx = data.indexOf('q(', idx);
  if (qIdx === -1) break;
  // find the next comma after the department and question string
  // q("Dept", "Question text",
  const firstParen = data.indexOf('(', qIdx);
  const closeForQHeader = findMatchingParen(data, firstParen);
  // But q(...) contains the whole question including buildChoices; need to parse differently
  // Instead locate 'buildChoices(' after q(
  const bcIdx = data.indexOf('buildChoices(', qIdx);
  if (bcIdx === -1) { idx = qIdx + 2; continue; }
  const bcStart = data.indexOf('(', bcIdx) + 1;
  const bcEnd = findMatchingParen(data, bcStart-1);
  if (bcEnd === -1) { idx = bcIdx + 1; continue; }
  const block = data.slice(bcStart, bcEnd).trim();

  // backtrack to find the question text (the second argument of q())
  // find the comma before buildChoices( that separates the q(...) args
  const beforeBuild = data.slice(0, bcIdx);
  const qOpen = beforeBuild.lastIndexOf('q(');
  const qParenOpen = beforeBuild.indexOf('(', qOpen);
  // we want the arguments between that paren and the 'buildChoices' occurrence
  const between = beforeBuild.slice(qParenOpen+1);
  // split top-level commas to get dept and question
  let parts = [];
  let cur = '';
  let inStr = false;
  let strChar = '';
  let depth = 0;
  for (let ch of between) {
    if (!inStr && (ch === '"' || ch === '\'')) { inStr = true; strChar = ch; cur += ch; continue; }
    if (inStr) {
      cur += ch;
      if (ch === strChar) { inStr = false; }
      continue;
    }
    if (!inStr && (ch === ',' && depth === 0)) {
      parts.push(cur.trim()); cur=''; continue;
    }
    if (ch === '(') depth++; else if (ch === ')') { if (depth>0) depth--; else break; }
    cur += ch;
  }
  if (cur.trim()) parts.push(cur.trim());
  const questionText = parts[1] ? unquote(parts[1]) : '<unknown question>';

  // parse block into tokens: strings and numbers
  const tokens = [];
  let i = 0;
  while (i < block.length) {
    while (i < block.length && /[\s,]/.test(block[i])) i++;
    if (i >= block.length) break;
    if (block[i] === '"' || block[i] === "'") {
      const quote = block[i];
      let j = i+1;
      let s = '';
      while (j < block.length) {
        if (block[j] === '\\') { s += block[j] + (block[j+1]||''); j+=2; continue; }
        if (block[j] === quote) { break; }
        s += block[j]; j++; 
      }
      tokens.push(s);
      i = j+1;
    } else {
      // number or identifier
      let j = i;
      let s = '';
      while (j < block.length && /[^,\)\s]/.test(block[j])) { s += block[j]; j++; }
      tokens.push(s.trim());
      i = j;
    }
  }

  // tokens should be 12 entries: aText,aReason,aScore,...
  const entries = [];
  for (let k = 0; k+2 < tokens.length; k += 3) {
    const text = tokens[k] || '';
    const reason = tokens[k+1] || '';
    const score = Number(tokens[k+2]) || 0;
    entries.push({ text, reason, score });
    if (entries.length === 4) break;
  }

  if (entries.length === 4) {
    // find max score
    const maxScore = Math.max(...entries.map(e=>e.score));
    const winners = entries.filter(e=>e.score===maxScore);
    // compute lengths
    const lengths = entries.map(e=>e.text.length);
    const maxLen = Math.max(...lengths);
    const maxLenIndex = lengths.indexOf(maxLen);
    const winnerIndex = entries.indexOf(winners[0]);
    results.push({ question: questionText, entries, lengths, maxScore, maxLenIndex, winnerIndex });
  }

  idx = bcEnd + 1;
}

// now flag if winnerIndex === maxLenIndex and the length is substantially larger than others
const flagged = results.filter(r => {
  const winnerLen = r.lengths[r.winnerIndex];
  const otherLens = r.lengths.filter((_,i)=>i!==r.winnerIndex);
  const avgOther = otherLens.reduce((a,b)=>a+b,0)/otherLens.length;
  return (r.winnerIndex === r.maxLenIndex) && (winnerLen > avgOther * 1.25) && (winnerLen - avgOther > 10);
});

if (flagged.length === 0) {
  console.log('OK: no obvious length-based longest-answer cues detected for highest-scoring choices.');
  process.exit(0);
}

console.log('Flagged questions where top-scoring choice is noticeably longest:\n');
for (const f of flagged) {
  console.log('Question:', f.question.slice(0,140).replace(/\s+/g,' ') );
  f.entries.forEach((e,i)=>{
    console.log(`  Choice ${String.fromCharCode(65+i)} (score ${e.score}) length=${f.lengths[i]}: ${e.text.slice(0,140).replace(/\s+/g,' ')}${e.text.length>140?'...':''}`);
  });
  console.log('');
}
process.exit(0);
