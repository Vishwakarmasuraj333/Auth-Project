import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import app from "./app";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://auth-project-h1vy.vercel.app",
      "https://auth-project-three-theta.vercel.app",
    ],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

app.use("/api/auth", authRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
