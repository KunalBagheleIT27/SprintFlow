import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


// REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;

    // validation
    if (!fullName || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    // generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(201).json({
  success: true,
  message: "Account created successfully",
  token,
  user: {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
  },
});

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password required",
      });
    }

    // check user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

   res.status(200).json({
  success: true,
  message: "Login successful",
  token,
  user: {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
  },
});

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};