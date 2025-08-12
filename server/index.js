import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// Components
import Connection from "./database/db.js";
import Router from "./routes/route.js";

dotenv.config();

const app = express();
const allowedOrigins = [
  "https://blog-website-uul8.onrender.com",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.options(
  "*",
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.set("trust proxy", true);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use("/", Router);

// Database Connection
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

// --- Serve React frontend in production ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

// Render assigns a random port in production
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server running successfully on PORT ${PORT}`)
);
