import db from "../../models/index.js";

export const getAllPurchases = async (req, res) => {
  try {
    const obtainPurchase = await db.Purchase.findAll();

    if (obtainPurchase.length === 0) {
      return res.status(204).json('El listado de ventas está vacío.');

    } else {
      return res.status(200).json(obtainPurchase);

    };

  } catch (error) {
    return res.status(500).json({ message: error });

  };

};

export const postPurchase = async (req, res) => {
  const { user_id, date, total } = req.body;
  console.log('🚀 ~ postPurchase ~ req.body:', req.body);

  try {
    const newPurchase = await db.Purchase.create(
      {
        user_id: user_id,
        date: date,
        total: total,
      },

    )

    return res.status(201).json({ message: 'Venta creada exitosamente.' });

  } catch (error) {
    console.log('🚀 ~ postPurchase ~ error:', error);
    return res.status(500).json({ message: error });

  };

};
