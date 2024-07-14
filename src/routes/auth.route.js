import express from "express";
import authController from "../controller/auth.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const authRouter = express.Router();

authRouter
  .route("/register")
  .post(upload.single("pfp"), authController.register);
authRouter.route("/login").post(authController.login);

export { authRouter };
