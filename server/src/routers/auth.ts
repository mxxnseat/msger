import express from "express";
const router = express.Router();


import Auth from "../controllers/auth";


router.post("/login", Auth.login.bind(Auth));
router.post("/register", Auth.register.bind(Auth));
router.post("/checklogin", Auth.checkLogin.bind(Auth));

export default router;