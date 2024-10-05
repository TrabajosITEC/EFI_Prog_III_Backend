import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Recipes = sequelize.define('Recipes', {
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ingredientes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    Burrito: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Ortega: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    tableName: 'Recipes',
    timestamps: false
  });

  Recipes.associate = function (models) {
    Recipes.belongsTo(models.User, {
      foreignKey: 'UserId',
    })
  };

  return Recipes;
};
