import db from "../../models/index.js";

export const getAllReviews = async(req, res) => {
  try{
    const obtainReviews = await db.Review.findAll();

    if(obtainReviews.length === 0){
      return res.status(204).json('El listado de comentarios está vacío.');

    }else{
      return res.status(200).json(obtainReviews);

    };

  }catch(error){
    return res.status(500).json({ message: error });

  };

};

export const postReview = async(req, res) => {
  const { game_id, user_id, rating, review } = req.body;
  
  try{
    const newGame = await db.Game.create(
      {
        game_id: game_id,
        user_id: user_id,
        rating: rating,
        review: review
      },
    
    )

    return res.status(201).json({ message: 'Juego creado exitosamente.' });

  }catch(error){
    return res.status(500).json({ message: error });

  };

};

export const updateReview = async(req, res) => {
  const { game_id, user_id, rating, review  } = req.body;

  try{
    const { id } = req.params;
    const findGame = await db.Game.findByPk(id); // findByPk devuelve una promesa.
    
    if(findGame){
      try{
        findGame.set({
            game_id: game_id,
            user_id: user_id,
            rating: rating,
            review: review
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

export const deleteReview = async(req, res) => {
  try{
    const { id } = req.params;
    const findReview = await db.Review.findByPk(id); // findByPk devuelve una promesa.

    if(findReview){
      try{
        await findReview.destroy();

        return res.status(200).json({ message: `El comentario con ID ${id} fue borrado exitosamente.` });

      }catch(error){
        return res.status(500).json({ message: error });

      };

    }else{
      return res.status(404).json(`El comentario con ID ${id} no existe.`);

    };

  }catch(error){
    return res.status(500).json({ message: error });

  };

};