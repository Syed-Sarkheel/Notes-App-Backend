import bcrypt from "bcrypt";
import { User } from "../../model/user.model.js";
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Missing Fields" });
    }
    const ob = await User.findOne({ email: email });
    if (!ob) {
      return res.status(404).json({ message: "Invalid Credentials" });
    }
    const verified = await bcrypt.compare(password, ob.password);
    if (!verified) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const at = ob.generateAccessToken();
    const rt = ob.generateRefreshToken();
    res.cookie("at", at);
    res.cookie("rt", rt);
    res.status(200).json({
      message: "User Logged in Successfully",
      accessToken: at,
      refreshToken: rt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export { loginUser };
