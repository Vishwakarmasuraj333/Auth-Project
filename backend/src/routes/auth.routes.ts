import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/auth.controller";
import { protect } from "../middleware/auth.middleware";
import { verifyCaptcha } from "../middleware/verifycapthca";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getProfile);
router.post(
  "/login",
  verifyCaptcha,
  loginUser
);
export default router;