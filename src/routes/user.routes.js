import { Router } from "express";
import { login, logOut, Register } from "../controllers/user.controller.js";
import upload from "../middlewares/multer.middleware.js";
import verifyJWT from "../middlewares/verifyjwt.js";

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
  Register
);

useRouter.route("/login").post(upload.none(), login);
useRouter.route("/logout").post( verifyJWT , logOut)

export default useRouter;
