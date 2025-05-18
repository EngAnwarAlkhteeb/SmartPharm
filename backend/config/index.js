import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export default {
  port: process.env.PORT || 5000,
  hf: {
    apiToken: process.env.HF_API_TOKEN,
    modelUrl:
      process.env.HF_MODEL_URL ||
      "https://api-inference.huggingface.co/models/piero80/medalpaca-7b",
  },
};
