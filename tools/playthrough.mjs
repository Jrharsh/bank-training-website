import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const modPath = path.join(process.cwd(), 'public', 'js', 'static-scenarios.js');
  const mod = await import('file://' + modPath);

  // Try to find SCENARIO_RANSOMWARE by key
  const scenarios = mod.getScenarios();
  const ransom = scenarios.find(s => s.key && s.key.toLowerCase().includes('ransom')) || mod.getRandomScenario();
  if (!ransom) {
    console.error('No scenario found');
    process.exit(1);
  }

  console.log(`Scenario: ${ransom.title} (${ransom.key})\n`);

  const threshold = 6; // gap threshold to consider 'obvious'
  const obvious = [];

  ransom.questions.forEach((q, idx) => {
    const scores = (q.choices || []).map(c => Number(c.score || 0));
    const sorted = [...scores].sort((a,b)=>b-a);
    const max = sorted[0] ?? 0;
    const second = sorted[1] ?? -Infinity;
    const gap = max - second;

    const isObvious = gap >= threshold;
    if (isObvious) obvious.push({index: idx+1, department: q.department, question: q.questionText, max, second, gap, choices: q.choices});

    console.log(`Q${idx+1} [${q.department}] gap=${gap} (max=${max},2nd=${second})`);
    q.choices.forEach((c,i)=>{
      console.log(`  ${String.fromCharCode(65+i)}. (${c.score}) ${c.text.substring(0,120).replace(/\n/g,' ')}${c.text.length>120?'...':''}`);
    });
    console.log('');
  });

  console.log('=== SUMMARY ===');
  console.log(`${obvious.length} of ${ransom.questions.length} questions flagged as too obvious (gap >= ${threshold})\n`);
  obvious.forEach(o=>{
    console.log(`Q${o.index} [${o.department}] gap=${o.gap} (max=${o.max}, 2nd=${o.second})`);
    console.log(`  ${o.question}\n`);
  });
}

run().catch(err=>{console.error(err); process.exit(1);});
