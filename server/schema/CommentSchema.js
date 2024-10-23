const { DataTypes } = require('sequelize');
const sequelize = require('../database/connectToDB');

const CommentSchema = sequelize.define('Comments', {
    formId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Forms', key: 'id' },
        onDelete: 'CASCADE'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE'
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    timestamps: true
});

// sequelize.sync();
module.exports = CommentSchema;
