import { Router } from "express";
import { getUserRegister, postUsersRegister } from "../controllers/register.controllers.js";

const routerRegister = Router()

routerRegister.get('/', getUserRegister);

routerRegister.post('/', postUsersRegister);


export default routerRegister