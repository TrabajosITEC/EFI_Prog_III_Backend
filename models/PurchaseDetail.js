export default (sequelize) => {
  const PurchaseDetail = sequelize.define('PurchaseDetail', {
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Game',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'PurchaseDetail',
    timestamps: false
  });
  PurchaseDetail.associate = function (models) {
    PurchaseDetail.belongsTo(models.Game, {
      foreignKey: 'game_id',
    }),
      PurchaseDetail.belongsTo(models.Purchase, {
        foreignKey: 'purchase_id',
      })
  };

  return PurchaseDetail;
};
