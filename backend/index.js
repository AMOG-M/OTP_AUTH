import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const otpStore = new Map();
app.use(cors());
app.use(express.json());

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


app.post("/generate-otp", async (req, res) => {
  const { email } = req.body;

  const otp = generateOtp();
  const expiresAt = Date.now() + 2 * 60 * 1000; // 2 minutes

  otpStore.set(email, { otp, expiresAt });

  console.log("Generated OTP:", otp);

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It expires in 2 minutes.`,
    });

    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email sending failed" });
  }
});


app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  const record = otpStore.get(email);

  if (!record) {
    return res.status(400).json({ message: "No OTP found. Generate again." });
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(email);
    return res.status(400).json({ message: "OTP expired." });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP." });
  }

 // otpStore.delete(email);

  res.json({ message: "OTP verified successfully" });
});

app.listen(process.env.PORT, () => {
  console.log("Server running on http://localhost:5000");
});