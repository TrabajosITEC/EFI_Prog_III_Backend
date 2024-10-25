import { Router } from "express";
import { getAllReviews, postReview, updateReview, deleteReview } from "../controllers/review.controllers.js";
import { validateToken } from "../helpers/validateToken.js";
import { blockedRouteFor } from "../helpers/blockedRouteFor.js";

const routerReview = Router();

routerReview.get('/', validateToken, getAllReviews); 

routerReview.post('/', validateToken, postReview); 

routerReview.put('/:id', validateToken, blockedRouteFor('gamer'), updateReview); 

routerReview.delete('/:id', validateToken, blockedRouteFor('gamer'), deleteReview); 

export default routerReview;