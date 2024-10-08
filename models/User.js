import { DataTypes } from "sequelize";

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
    User.hasMany(models.Purchase, {
      foreignKey: 'user_id',
    }),
    User.hasMany(models.Review, {
      foreignKey: 'user_id',
    })
  };

  return User;
};
