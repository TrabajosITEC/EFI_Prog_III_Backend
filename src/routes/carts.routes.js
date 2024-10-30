import { Router } from "express";
import { getCart, addToCart, checkoutCart, removeFromCart, clearCart } from "../controllers/carts.controllers.js";

const routerCart = Router();

// Obtener el carrito de un usuario específico
routerCart.get('/:userId', getCart); 

// Agregar item al carrito
routerCart.post('/add', addToCart); 

// Finalizar compra desde el carrito
routerCart.post('/checkout', checkoutCart);

// Eliminar elemento del carrito
routerCart.delete('/item/:cartItemId', removeFromCart);

// Eliminar carrito completo
routerCart.delete('/clear/:userId', clearCart);

export default routerCart;