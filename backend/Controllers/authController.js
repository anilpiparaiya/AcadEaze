import User from "../models/UserSchema.js";
import Mentor from "../models/MentorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;
  try {
    let user = null;

    if (role === "mentee") {
      user = User.findOne({ email });
    } else if (role === "mentor") {
      user = Mentor.findOne({ email });
    }

    // check if user exist
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    // hash password
    const salt = await bcrypt.hash(password, salt);

    if (role === "mentee") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    if (role === "mentor") {
        user = new Mentor({
          name,
          email,
          password: hashPassword,
          photo,
          gender,
          role,
        });
      }

      await user.save()
      res.status(200).json({success: true, message: 'User successfully created!!'})
  } catch (error) {
    res.status(500).json({success: false, message: 'Internal server error, Try again'})
  }
};

export const login = async (req, res) => {
  try {
  } catch (error) {}
};
