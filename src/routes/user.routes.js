import { Router } from "express";
import { login, Register } from "../controllers/user.controller.js";
import upload from "../middlewares/multer.middleware.js";

const useRouter = Router();

useRouter.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  Register);

  useRouter.route("/login").post( upload.none(),login)

export default useRouter;
