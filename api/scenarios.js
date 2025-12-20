export const maxDuration = 30;
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
  try{
    const system = `... (same prompt you have) ...`;
    const r = await openai.chat.completions.create({
      model:"gpt-4o-mini",
      messages:[{role:"system",content:system},{role:"user",content:"Generate one crisis scenario with seven department-specific questions."}],
      temperature:0.8
    });
    const raw = r.choices[0].message.content.trim().replace(/^```(?:json)?\n?|```$/g,"");
    const json = JSON.parse(raw);
    return res.status(200).json(json);
  }catch(e){
    console.error("AI error:", e);
    return res.status(200).json({
      title:"Fallback Scenario",
      description:"Temporary mock while AI is unavailable.",
      questions:[
        {department:"CEO/SVPs",questionText:"Decide public stance now?",choices:[
          {text:"Lead clear comms plan",type:"correct",explanation:"Sets tone quickly."},
          {text:"Wait 24h",type:"neutral",explanation:"Buys time."},
          {text:"Say nothing",type:"wrong",explanation:"Creates vacuum."},
          {text:"Blame vendors",type:"wrong",explanation:"Backfires."}
        ]},
        {department:"IT/Security",questionText:"Containment first?",choices:[
          {text:"Isolate/restore from backups",type:"correct",explanation:"Stops spread."},
          {text:"Monitor only",type:"neutral",explanation:"Risk persists."},
          {text:"Pay attackers",type:"wrong",explanation:"No guarantee."},
          {text:"Disable logging",type:"wrong",explanation:"Hurts forensics."}
        ]},
        {department:"HR",questionText:"Employee guidance?",choices:[
          {text:"Safety + comms plan",type:"correct",explanation:"Reduces fear."},
          {text:"Email later",type:"neutral",explanation:"Delay."},
          {text:"No updates",type:"wrong",explanation:"Rumors."},
          {text:"Share PII list",type:"wrong",explanation:"Privacy risk."}
        ]},
        {department:"Finance",questionText:"Liquidity actions?",choices:[
          {text:"Activate contingency funding",type:"correct",explanation:"Stability."},
          {text:"Small cuts only",type:"neutral",explanation:"Limited impact."},
          {text:"Freeze all spend",type:"wrong",explanation:"Ops pain."},
          {text:"Ignore ratios",type:"wrong",explanation:"Reg risk."}
        ]},
        {department:"Loans",questionText:"Pipeline continuity?",choices:[
          {text:"Manual processing playbook",type:"correct",explanation:"Keeps flow."},
          {text:"Pause new apps",type:"neutral",explanation:"Demand hit."},
          {text:"Cancel apps",type:"wrong",explanation:"Reputation."},
          {text:"Lose docs",type:"wrong",explanation:"Compliance."}
        ]},
        {department:"Accounting",questionText:"Reporting now?",choices:[
          {text:"Provisional close + controls",type:"correct",explanation:"Transparency."},
          {text:"Delay close",type:"neutral",explanation:"Short lag."},
          {text:"Skip reconciliations",type:"wrong",explanation:"Misstatements."},
          {text:"Alter entries",type:"wrong",explanation:"Fraud risk."}
        ]},
        {department:"Deposits",questionText:"Customer access?",choices:[
          {text:"Branches/ATM limits + status page",type:"correct",explanation:"Access+trust."},
          {text:"ATM only",type:"neutral",explanation:"Partial."},
          {text:"Shut all channels",type:"wrong",explanation:"Panic."},
          {text:"No comms",type:"wrong",explanation:"Confusion."}
        ]}
      ]
    });
  }
}
