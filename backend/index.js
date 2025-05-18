import express from "express";
import cors from "cors";
import config from "./config/index.js";
import chatRoute from "./routes/chatRoute.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chat", chatRoute);

// Start server
app.listen(config.port, () => {
  console.log(
    `💊 Pharmacy Chatbot Backend running at http://localhost:${config.port}`
  );
});