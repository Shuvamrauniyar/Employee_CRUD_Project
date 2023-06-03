'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.empdetails,{
        foreignKey: emp_id,
        onDelete: 'CASCADE'
      });
    }
  }
  ContactDetails.init({
    contact_name: DataTypes.STRING,
    emp_id: { //added after model creation , see the new migration file made for it
      type: DataTypes.INTEGER,
      allowNull:false
    },
    phone: DataTypes.INTEGER,
    relation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContactDetails',
  });
  return ContactDetails;
};