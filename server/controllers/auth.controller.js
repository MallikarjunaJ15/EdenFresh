import { createUser, loginUser } from "../services/auth.service.js";
import generateToken from "../utils/generateToken.js";
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "Password must be at least 6 characters" });
    }
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields required" });
    }
    const user = await createUser(name, email, password);
    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.status(201).json({
      msg: "User created",
      user,
    });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({
      success: true,
      msg: "Login successful",
    });
  } catch (err) {
    return res.status(401).json({ success: false, msg: err.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  res.status(200).json({ msg: "Logged out successfully" });
};
