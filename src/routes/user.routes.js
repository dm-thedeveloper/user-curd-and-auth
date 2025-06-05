import  { Router } from "express";
import { Register } from "../controllers/user.controller.js";


const useRouter = Router()

useRouter.route("/register").post(Register)

export default useRouter;