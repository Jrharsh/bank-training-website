export const maxDuration = 30;
import { getRandomScenario } from "./static-scenarios.js";

// Offline handler: returns a deterministic, locally generated scenario
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const scenario = getRandomScenario();
    return res.status(200).json(scenario);
  } catch (e) {
    console.error("Static scenario error:", e);
    return res.status(500).json({ error: "Failed to generate scenario" });
  }
}
