import { loginUser } from "./Auth/loginUser.js";
import { registerUser } from "./Auth/registerUser.js";

const authController = {
  register: registerUser,
  login: loginUser,
};

export default authController;
