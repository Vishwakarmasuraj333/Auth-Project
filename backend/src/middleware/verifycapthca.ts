import axios from "axios";
import { Request, Response, NextFunction } from "express";

export const verifyCaptcha = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { captchaToken } = req.body;

    if (!captchaToken) {
      return res.status(400).json({
        message: "Captcha Missing",
      });
    }

    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret:
            process.env
              .RECAPTCHA_SECRET_KEY,
          response: captchaToken,
        },
      }
    );

    if (!response.data.success) {
      return res.status(403).json({
        message: "Captcha Failed",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message:
        "Captcha Verification Error",
    });
  }
};