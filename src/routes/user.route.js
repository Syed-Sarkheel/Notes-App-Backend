import express from "express";
import { generateOTP } from "../controller/User/generateOTP.js";
import { getDetails } from "../controller/User/getDetails.js";
import { updatePassword } from "../controller/User/updatePassword.js";
import { checkAuth } from "../middleware/auth.middleware.js";
const userRouter = express.Router();
userRouter.route("/update/:id").patch(checkAuth, updatePassword);
userRouter.route("/details/:id").patch(checkAuth, getDetails);
userRouter.route("/sendOTP").post(generateOTP);

export default userRouter;
