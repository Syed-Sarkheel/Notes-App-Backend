import express from "express";
import { authRouter } from "./auth.route.js";
import noteRouter from "./note.route.js";
import userRouter from "./user.route.js";
const indexRouter = express.Router();
indexRouter.use("/api/v1/note", noteRouter);
indexRouter.use("/api/v1/user", userRouter);
indexRouter.use("/api/v1/auth", authRouter);

export default indexRouter;
