import db from "../../models/index.js";

export const getAllGames = async(req, res) => {
  try{
    const obtainGames = await db.Game.findAll();

    res.json(obtainGames);

  }catch(error){
    return res.status(500).json({ message: error });

  };

};

export const postGame = async(req, res) => {
  const { title, genre, platform, price, available } = req.body;
  
  try{
    const newGame = await db.Game.create(
      {
        title: title,
        genre: genre,
        platform: platform,
        price: price,
        available: available
      },
    
    )

    res.status(201).json({ message: 'Juego creado exitosamente.' });

  }catch(error){
    return res.status(500).json({ message: error });

  };

};

export const updateGame = async(req, res) => {
  try{
    res.json('Method Update');
    
  }catch(error){
    throw new Error(error);

  };

};

export const deleteGame = async(req, res) => {
  try{
    res.json('Method Delete');

  }catch(error){
    throw new Error(error);

  }

};