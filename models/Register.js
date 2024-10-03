import { DataTypes } from "sequelize";

// Función que inicializa el modelo
export default (sequelize) => {
  const Register = sequelize.define('Register', { 
    userName: {
      type: DataTypes.TEXT,
      allowNull: false, 
    },
    passWord: {
      type: DataTypes.TEXT,
      allowNull: false, 
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false, 
    }
  }, {
    tableName: 'Register', 
    timestamps: false       
  });
  
  Register.associate = function(models) {
    Register.hasMany(models.Recipes, {
      foreignKey: 'RegisterId',
    })
  };
 
  return Register;
};
