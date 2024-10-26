import { Router } from "express";
import { getCart, addToCart, checkoutCart } from "../controllers/carts.controllers.js";

const routerCart = Router();

// Obtener el carrito de un usuario específico
routerCart.get('/:userId', getCart); 

// Agregar item al carrito
routerCart.post('/add', addToCart); 

// Finalizar compra desde el carrito
routerCart.post('/checkout', checkoutCart);

export default routerCart;