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
        password: salt,
        photo,
        gender,
        role,
      });
    }

    if (role === "mentor") {
        user = new Mentor({
          name,
          email,
          password: salt,
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
  const {email,password}= req.body
  try {
    if (!email ||!password) {
      return res.status(400).json({success:false,message:'email or password required'})

    }

    const user = await User.findOne(email)
    if (!user) {
      res.status(400).json({success:false, message:'user not found'})
    }
    const ispasswordValid = await user.ispasswordCorrect(password);
    if (!ispasswordValid) {
      return res.status(400).json({success: false, message : "password is invalid"})
    }

    const loggedInUser = await User.findById(user._id).select(
      "-password"
    );
    const options = {
      httpOnly: true,
      secure: true,
    };

    return res.status(200).json({success:true, message:user})

  } catch (error) {
    return res.status(400).json({success:false, message:error})
  }
};
