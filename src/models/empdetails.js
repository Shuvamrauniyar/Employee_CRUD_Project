'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmpDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmpDetails.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    designation: {
      type:DataTypes.STRING,
      allowNull: false
    },
    contact: {
       allowNull: false,
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
       unique: true,
      validate: {
        isEmail:true
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: 
    {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'EmpDetails',
  });
  return EmpDetails;
};