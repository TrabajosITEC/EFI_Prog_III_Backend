import { Router } from "express";
import { getAllGames, postGame, updateGame, deleteGame } from "../controllers/games.controllers.js";

const routerGames = Router();

routerGames.get('/', getAllGames); // La ruta es http://localhost:3001/games GET

routerGames.post('/', postGame); // http://localhost:3001/games POST

routerGames.put('/:id', updateGame); // http://localhost:3001/games/:id PUT

routerGames.delete('/:id', deleteGame); // http://localhost:3001/games/:id DELETE

export default routerGames;