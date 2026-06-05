import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import contactRoutes from "./routes/contact.routes";
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Auth backend running");
});

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
export default app;

