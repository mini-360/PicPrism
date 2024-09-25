import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import generateAccessToken from "../helpers/accessToken.js";
import generateRefreshToken from "./refreshToken.js";
// import express from "express";

const signup = async (req, res) => {
  const { username, email, password, accountType } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already in use" });
    }
    const securePassword = await bcrypt.hash(password, 10);
    user = new User({
      username,
      email,
      password: securePassword,
      accountType,
    });
    await user.save();

    return res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }

    const data = {
      id: user._id,
      accountType: user.accountType,
      author: user.username,
    };

    const accessToken = generateAccessToken(data);
    const refreshToken = generateRefreshToken(data);

    res
      .status(200)
      .json({
        success: true,
        message: "User logged in successfully",
        accessToken,
        refreshToken,
        accountType: user.accountType,
        author: user.username,
      });
  } catch (error) {
    // console.log(error);

    return res.status(500).json({ message: error.message });
  }
};

// writing the forget password logic......

const forgot = async (req, res) => {
  const { email } = req.body;
  try {
    const genrateOtp = Math.floor(Math.random() * 10000);

    var transporter = nodemailer.createTransport({
      // host: "sandbox.smtp.mailtrap.io",
      // port: 2525,
      service: "gmail",
      auth: {
        user: "aniket.singh07vs@gmail.com",
        pass: "fidmnumrlsgcjfvm",
      },
    });
    const info = await transporter.sendMail({
      from: '"Maddison Foo👻" <aniket.singh07vs@gmail.com>',
      to: email,
      subject: "New OTP Generated",
      html: `<p>
        <b>Dear User,  </b>
        
        <p><b>${genrateOtp}</b> is your OTP. PLease do not share the OTP from the other's</p>
        <p>Regards</p>
        <p>Team PicPrism</p>
        
      </p>`,
    });

    if (info.messageId) {
      let user = await User.findOneAndUpdate(
        { email },
        { otp: genrateOtp },
        { new: true }
      );

      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }
    }
    return res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const verify = async (req, res) => {
  const { otp, password } = req.body;
  try {
    let user = await User.findOne({ otp });
    if (!user) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    const securePassword = await bcrypt.hash(password, 10);

    user = await User.findOneAndUpdate(
      { otp },
      { password: securePassword, otp: 0 },
      { new: true }
    );

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { login, signup, forgot, verify };
