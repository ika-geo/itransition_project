const { DataTypes } = require('sequelize');
const sequelize = require('../database/connectToDB'); // Import the configured sequelize instance

const FilledFormItemSchema = sequelize.define('FilledFormItems', {
    filledFormId:{
        type: DataTypes.INTEGER,
        references: {
            model: 'FilledForms',
            key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
    },
    question:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer:{
        type: DataTypes.STRING
    }
})

// sequelize.sync();
module.exports = FilledFormItemSchema;