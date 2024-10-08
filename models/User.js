import { DataTypes } from "sequelize";

// Función que inicializa el modelo
export default (sequelize) => {
  const User = sequelize.define('User', {
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
    },
    role: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    tableName: 'User',
    timestamps: false
  });

  User.associate = function (models) {
    User.hasMany(models.Recipes, {
      foreignKey: 'UserId',
    }),
    User.hasMany(models.Review, {
      foreignKey: 'id_usuario',
    })
  };

  return User;
};
