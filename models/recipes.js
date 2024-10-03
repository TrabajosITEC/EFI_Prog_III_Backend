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
    RegisterId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Register',
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

  Recipes.associate = function(models) {
    Recipes.belongsTo(models.Register, {
      foreignKey: 'RegisterId',
    })
  };

  return Recipes;
};
