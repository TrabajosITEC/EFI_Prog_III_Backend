import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Purchase = sequelize.define('Purchase', {
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
    timestamps: false
  });

  Purchase.associate = function (models) {
    Purchase.belongsTo(models.Game, {
      foreignKey: 'game_id',
    }),
      Purchase.belongsTo(models.User, {
        foreignKey: 'user_id',
      })
  };

  return Purchase;
};
