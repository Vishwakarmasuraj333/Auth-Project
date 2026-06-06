import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import app from "./app";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";

const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://auth-project-three-theta.vercel.app",
  "https://auth-project-h1vy.vercel.app",
  "https://auth-project-h1vy-git-main-vishwakarmasuraj333s-projects.vercel.app",
  "https://auth-project-h1vy-c7at27is5-vishwakarmasuraj333s-projects.vercel.app",
];

const corsOptions: cors.CorsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS blocked: ${origin}`));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

app.use("/api/auth", authRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
