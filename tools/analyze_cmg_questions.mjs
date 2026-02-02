import fs from 'fs';
import vm from 'vm';
const src = fs.readFileSync(new URL('../public/js/static-scenarios.js', import.meta.url), 'utf8');

const candidates = [];
let match; let total = 0;
const pattern = /q\(\s*"([^"]+)"\s*,\s*"([^"]+)"[\s\S]*?buildChoices\(([\s\S]*?)\)\s*\)/g;
while((match = pattern.exec(src)) !== null){
  total++;
  const dept = match[1];
  const question = match[2];
  const choicesBlock = match[3];
  const scores = Array.from(choicesBlock.matchAll(/([-]?\d+)\s*(,|\))/g)).map(m=>parseInt(m[1],10));
  const sorted = scores.slice().sort((a,b)=>b-a);
  const top = sorted[0]||0; const second = sorted[1]||0; const diff = top-second;
  if(diff >=4 || top >=9){
    candidates.push({department:dept, question: question.slice(0,140), top, second, diff});
  }
}

console.log('Total q(...) occurrences found (rough):', total);
console.log('Candidate questions with large gaps (top-second >=4 or top>=9):', candidates.length);
console.log();
for(const c of candidates.slice(0,80)){
  console.log(`- Dept: ${c.department} | top:${c.top} second:${c.second} (diff:${c.diff})`);
  console.log(`  Q: ${c.question}`);
}
fs.writeFileSync(new URL('../tools/cmg_candidates.json', import.meta.url), JSON.stringify({total, candidates}, null, 2));
console.log('\nWrote tools/cmg_candidates.json');
