const { DataTypes } = require('sequelize');
const sequelize = require('../database/connectToDB'); // Import the configured sequelize instance

const FormFieldSchema = sequelize.define('FormFields', {
    formId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Forms',
            key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('text', 'textarea', 'boolean', 'select'),
        allowNull: false,
    },
    options: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: null,
    },
    hidden:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
})

sequelize.sync();
module.exports = FormFieldSchema;