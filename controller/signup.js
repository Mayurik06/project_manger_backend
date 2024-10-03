import User from "../models/user.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return req
        .status(400)
        .json({ success: false, message: "Please provide email and password" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const user = await User.create({ email, password:hashPassword });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
