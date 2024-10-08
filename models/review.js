'use strict';
import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Review = sequelize.define(
    'Review',
    {
      game_id:{
        type: DataTypes.INTEGER,
      }, 
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      puntuacion:{
        type: DataTypes.INTEGER,
      },
      comentario: {
        type: DataTypes.TEXT
      }
    }, {
      tableName: 'Review',
      timestamps: false
    })
  
    Review.associate = function (models) {
      Review.belongsTo(models.User, {
        foreignKey: 'id_usuario',
      })
    }

  return Review;
};