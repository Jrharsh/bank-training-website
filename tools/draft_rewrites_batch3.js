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

function shorten(text) {
  if (!text) return text;
  let t = text.trim();
  t = t.replace(/\([^)]*\)/g, '').replace(/\s+/g,' ').trim();
  const parts = t.split(/;|\. |, and |, which |, that |, so |, while |, and /i);
  if (parts.length > 2) {
    t = parts.slice(0,2).join(', ').trim();
  }
  if (t.length > 140) {
    const idx = t.lastIndexOf(',', 140);
    if (idx > 80) t = t.slice(0, idx) + '.';
    else t = t.slice(0, 137) + '...';
  }
  t = t.replace(/\s+,/g, ',').replace(/\s+\./g, '.');
  return t;
}

const results = [];
let idx = 0;
while (true) {
  const qIdx = data.indexOf('q(', idx);
  if (qIdx === -1) break;
  const bcIdx = data.indexOf('buildChoices(', qIdx);
  if (bcIdx === -1) { idx = qIdx + 2; continue; }
  const bcStart = data.indexOf('(', bcIdx) + 1;
  const bcEnd = findMatchingParen(data, bcStart-1);
  if (bcEnd === -1) { idx = bcIdx + 1; continue; }
  const block = data.slice(bcStart, bcEnd).trim();

  const beforeBuild = data.slice(0, bcIdx);
  const qOpen = beforeBuild.lastIndexOf('q(');
  const qParenOpen = beforeBuild.indexOf('(', qOpen);
  const between = beforeBuild.slice(qParenOpen+1);
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
      let j = i;
      let s = '';
      while (j < block.length && /[^,\)\s]/.test(block[j])) { s += block[j]; j++; }
      tokens.push(s.trim());
      i = j;
    }
  }

  const entries = [];
  for (let k = 0; k+2 < tokens.length; k += 3) {
    const text = tokens[k] || '';
    const reason = tokens[k+1] || '';
    const score = Number(tokens[k+2]) || 0;
    entries.push({ text, reason, score });
    if (entries.length === 4) break;
  }

  if (entries.length === 4) {
    const maxScore = Math.max(...entries.map(e=>e.score));
    const winners = entries.filter(e=>e.score===maxScore);
    const lengths = entries.map(e=>e.text.length);
    const maxLen = Math.max(...lengths);
    const maxLenIndex = lengths.indexOf(maxLen);
    const winnerIndex = entries.indexOf(winners[0]);
    const otherLens = lengths.filter((_,i)=>i!==winnerIndex);
    const avgOther = otherLens.reduce((a,b)=>a+b,0)/otherLens.length;
    const flagged = (winnerIndex === maxLenIndex) && (lengths[winnerIndex] > avgOther * 1.25) && (lengths[winnerIndex] - avgOther > 10);
    if (flagged) {
      results.push({ question: questionText, entries, winnerIndex });
    }
  }

  idx = bcEnd + 1;
}

const batch = results.slice(40,60);
const proposals = batch.map((r, i) => {
  const top = r.entries[r.winnerIndex];
  const original = top.text;
  const proposal = shorten(original);
  return {
    id: 40 + i + 1,
    question: r.question.replace(/\s+/g,' ').slice(0,220),
    original: original,
    proposal: proposal,
    score: top.score
  };
});

console.log(JSON.stringify({ batchSize: proposals.length, proposals }, null, 2));
