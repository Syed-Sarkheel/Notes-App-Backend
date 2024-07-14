import { User } from "../../model/user.model.js";
import otp from "otp-generator-random";
import { config, sendMail } from "../../services/mail.service.js";
const generateOTP = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Required fields missing" });
    }
    const exists = await User.findOne({ email });
    if (!exists) {
      return res
        .status(404)
        .json({ message: "User with provided Email does not exist" });
    }
    const otp1 = otp(6);
    console.log("Generated OTP:", otp1);
    await config(process.env.MAIL_USER, process.env.MAIL_PASS);
    await sendMail(email, "OTP", `Your OTP IS ${otp1}`);
    res.status(200).json({ message: "OTP Sent Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
export { generateOTP };
