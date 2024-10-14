import { Router } from "express";
import { getUserRegister, postUsersRegister, getUserById } from "../controllers/user.controllers.js";

const routerRegister = Router()

routerRegister.get('/', getUserRegister);

routerRegister.post('/', postUsersRegister);

routerRegister.get('/:id', getUserById);


export default routerRegister