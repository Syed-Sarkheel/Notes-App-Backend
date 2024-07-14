import { User } from "../../model/user.model.js";
import bcrypt from "bcrypt";
const updatePassword = async (req, res) => {
  try {
    const { password } = req.body;
    const { id } = req.params;
    if (!id || !password) {
      return res.status(400).json({ message: "Missing Fields" });
    }

    const exists = await User.findById(id);
    if (!exists) {
      return res
        .status(400)
        .json({ message: "User with provided ID does not exist" });
    }

    const hashed = await bcrypt.hash(password, 10);
    exists.password = hashed;
    await exists.save();
    res.status(200).json({ message: "Password Updated Sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export { updatePassword };
