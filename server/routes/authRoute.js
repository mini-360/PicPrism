import express from "express";
import {
  login,
  signup,
  forgot,
  verify,
} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/forgot", forgot);
router.post("/verify", verify);


export default router;
