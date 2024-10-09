import { Router } from "express";
import { getAllGames, postGame, updateGame, deleteGame } from "../controllers/games.controllers.js";

const routerGames = Router();

routerGames.get('/', getAllGames);

routerGames.post('/', postGame);

routerGames.put('/:id', updateGame);

routerGames.delete('/:id', deleteGame);

export default routerGames;