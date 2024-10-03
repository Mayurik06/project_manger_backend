import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return req
        .status(400)
        .json({ success: false, message: "Please provide email and password" });
    }

    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    if (!user && !isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    } else {
      const accessToken = jwt.sign(
        { id: user._id, email: user.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d" }
      );
      const refreshToken = jwt.sign(
        { id: user._id, email: user.email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
      );

      user.refreshToken = refreshToken; 
      await user.save();

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,           // Helps prevent XSS attacks
        secure: false,            // Set to false for local development (true in production with HTTPS)
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        sameSite: 'None',             // Lax for local development, None for cross-site
      });

      res.status(200).json({ success: true, message: "Login Successfull" , accessToken,refreshToken});
    }
  } catch (error) {
    console.log("Error:" + error);
    res.status(500).json({ message: "Internal server error" });
  }
};
