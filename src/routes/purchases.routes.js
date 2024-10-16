import { Router } from "express";
import { getAllPurchases, postPurchase } from "../controllers/purchases.controllers.js";

const routerPurchases = Router();

routerPurchases.get('/', getAllPurchases); // La ruta es http://localhost:3001/Purchases GET

routerPurchases.post('/', postPurchase); // http://localhost:3001/Purchases POST


export default routerPurchases;