const { DataTypes } = require('sequelize');
const sequelize = require('../database/connectToDB'); // Import the configured sequelize instance

const FilledFormSchema = sequelize.define('FilledForms', {
    formId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Forms',
            key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
    }
})

sequelize.sync();
module.exports = FilledFormSchema;