import jwt from "jsonwebtoken";
import User from "../models/user.js";

// export const logout = async (req, res) => {
//   try {
//     console.log("Cookies:", req.cookies);
//     const { refreshToken } = req.cookies || {};
//     if (!refreshToken) {
//       return res.status(401).json({ message: "You are not authenticated" });
//     }

//     // Decode the refreshToken to get the user ID
//     const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

//     // Use the ID from the decoded token to find the user
//     const user = await User.findById(decoded.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Unset the refreshToken from the user document
//     user.refreshToken = undefined;
//     await user.save();

//     // Clear the refreshToken cookie
//     res.clearCookie('refreshToken', {
//       httpOnly: true,
//       secure: false, // Set to true in production (with HTTPS)
//       sameSite: 'Lax', // Adjust based on your CORS policy
//       path: '/', // Ensure this matches the path the cookie was set on
//     });

//     return res.status(200).json({ success: true, message: 'Logged out successfully' });
//   } catch (error) {
//     console.error("Error:", error);
//     return res.status(500).json({ message: "Internal server error", error });
//   }
// };


export const logout=async(req,res)=>{ 

  return res.status(200).json({ success: true, message: 'Logged out successfully' });
}