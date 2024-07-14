import bcrypt from "bcrypt";
import { User } from "../../model/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing Fields" });
    }

    const hashed = await bcrypt.hash(password, 10);
    // console.log(req.file);
    const created = await User.create({
      name,
      email,
      password: hashed,
      profilePic: req.file.path,
    });

    const at = created.generateAccessToken();

    const rt = created.generateRefreshToken();

    res.cookie("at", at);

    res.cookie("rt", rt);

    res.status(201).json({
      message: "User Account Registered Successfully",
      accessToken: at,
      refreshToken: rt,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};
export { registerUser };
