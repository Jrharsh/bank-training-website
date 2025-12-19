import { getRandomScenario } from "./static-scenarios.js";

export default async function handler(req, res) {
  try {
    const scenario = getRandomScenario();
    return res.status(200).json(scenario);
  } catch (e) {
    console.error("Static random scenario error:", e);
    return res.status(500).json({ error: "Failed to generate static scenario" });
  }
}
