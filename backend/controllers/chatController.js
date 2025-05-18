import axios from "axios";
import config from "../config/index.js";

export const chatPost = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "No message provided" });
  }

  try {
    const response = await axios.post(
      config.hf.modelUrl,
      {
        inputs: `
You are PharmBot, a pharmacy assistant AI.
Answer clearly and responsibly. Do not give life-threatening advice.
Only suggest common OTC drugs if safe and appropriate.
User asked: ${message}

Assistant:
        `,
        parameters: {
          max_new_tokens: 200,
          temperature: 0.6,
          top_p: 0.9,
          do_sample: true,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${config.hf.apiToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const botReply = response.data.response;
    return res.json({ reply: botReply });
  } catch (error) {
    console.error("[Chat Controller] Error calling Ollama:", error.message);
    return res
      .status(500)
      .json({ error: "Failed to get response from AI model" });
  }
};
