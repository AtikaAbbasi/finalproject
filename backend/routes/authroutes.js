
import { Router } from "express";
import { forgetpasswd, login, restepasswrd, signup } from "../controllers/authcontrollers.js";


const router = Router();

router.post('/signup', signup)
router.post('/login' , login) 
router.post('/forget', forgetpasswd)
router.post('/reset' , restepasswrd)
export default router






// {
//     "name": "maha",
//     "email":"maha@gmail.com",
//     "password":"12345678",
//     "role":"user"
// }