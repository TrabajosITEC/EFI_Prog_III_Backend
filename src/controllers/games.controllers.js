import db from "../../models/index.js";

export const getAllGames = async(req, res) => {
  try{
    const obtainGames = await db.Game.findAll();

    if(obtainGames.length === 0){
      return res.status(204).json('El listado de juegos está vacío.');

    }else{
      return res.status(200).json(obtainGames);

    }

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

    return res.status(201).json({ message: 'Juego creado exitosamente.' });

  }catch(error){
    return res.status(500).json({ message: error });

  };

};

export const updateGame = async(req, res) => {
  const { title, genre, platform, price, available } = req.body;

  try{
    const { id } = req.params;
    const findGame = await db.Game.findByPk(id); // findByPk devuelve una promesa.
    
    if(findGame){
      try{
        findGame.set({
          title: title,
          genre: genre,
          platform: platform,
          price: price,
          available: available

        });

        await findGame.save();
        
        return res.status(200).json({ message: `El juego con ID ${id} se actualizó correctamente.` });
      
      }catch(err){
        return res.status(500).json({ message: err });
      
      };

    }else{
      return res.status(404).json(`El juego con ID ${id} no existe.`);

    };

     
  }catch(error){
    return res.status(500).json({ message: error });

  };

};

export const deleteGame = async(req, res) => {
  try{
    const { id } = req.params;
    const findGame = await db.Game.findByPk(id); // findByPk devuelve una promesa.

    if(findGame){
      try{
        await findGame.destroy();

        return res.status(200).json({ message: `El juego con ID ${id} fue borrado exitosamente.` });

      }catch(error){
        return res.status(500).json({ message: error });

      };

    }else{
      return res.status(404).json(`El juego con ID ${id} no existe.`);

    };

  }catch(error){
    return res.status(500).json({ message: error });

  };

};