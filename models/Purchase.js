import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Purchase = sequelize.define('Purchase', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    }
  }, {
    tableName: 'Purchase',
    timestamps: false,
    hooks: {
      async afterSave(purchase, options) {
        const purchaseDetails = await sequelize.models.PurchaseDetails.findAll({
          where: { purchase_id: purchase.id },
          include: [{ model: sequelize.models.Game }]
        });

        let total = 0;
        purchaseDetails.forEach(detail => {
          total += detail.quantity * detail.Game.price;
        });

        // Actualizamos el total calculado en la compra
        purchase.total = total;

        // Guardamos nuevamente el registro de la compra con el total actualizado
        await purchase.save();
      }
    }
  });

  Purchase.associate = function (models) {
    Purchase.hasMany(models.PurchaseDetail, {
      foreignKey: 'purchase_id'
    }),
      Purchase.belongsTo(models.User, {
        foreignKey: 'user_id',
      })
  };

  return Purchase;
};
