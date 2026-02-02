import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const args = process.argv.slice(2);
  const key = args[0] || 'insider-threat-terminated-employee';
  const modPath = path.join(process.cwd(), 'public', 'js', 'static-scenarios.js');
  const mod = await import('file://' + modPath);
  const scenario = mod.getScenarioByKey(key) || mod.getScenarios().find(s => s.key && s.key.toLowerCase().includes('insider'));
  if (!scenario) {
    console.error('Scenario not found for key:', key);
    process.exit(1);
  }

  console.log(`Scenario: ${scenario.title} (${scenario.key})\n`);
  const threshold = 6;
  const obvious = [];

  scenario.questions.forEach((q, idx) => {
    const scores = (q.choices || []).map(c => Number(c.score || 0));
    const sorted = [...scores].sort((a,b)=>b-a);
    const max = sorted[0] ?? 0;
    const second = sorted[1] ?? -Infinity;
    const gap = max - second;
    if (gap >= threshold) obvious.push({index: idx+1, department: q.department, question: q.questionText, max, second, gap, choices: q.choices});

    console.log(`Q${idx+1} [${q.department}] gap=${gap} (max=${max},2nd=${second})`);
    q.choices.forEach((c,i)=>{
      console.log(`  ${String.fromCharCode(65+i)}. (${c.score}) ${c.text.substring(0,120).replace(/\n/g,' ')}${c.text.length>120?'...':''}`);
    });
    console.log('');
  });

  console.log('=== SUMMARY ===');
  console.log(`${obvious.length} of ${scenario.questions.length} questions flagged as too obvious (gap >= ${threshold})\n`);
  obvious.forEach(o=>{
    console.log(`Q${o.index} [${o.department}] gap=${o.gap} (max=${o.max}, 2nd=${o.second})`);
    console.log(`  ${o.question}\n`);
  });
}

run().catch(err=>{console.error(err); process.exit(1);});
