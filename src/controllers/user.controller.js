import { v4 as uuidv4 } from "uuid";
import APIKEY from "../models/Apikey.js";
import User from "../models/User.js";

export const signUp = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await User.create({
      name: name,
      email: email,
      password: password,
      role: role,
    });

    const apiKey = await APIKEY.create({
      // id: uuidv4(),
      value: uuidv4(),
      userId: user.id,
    });
    return res.status(201).json({ success: true, apiKey, user });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
