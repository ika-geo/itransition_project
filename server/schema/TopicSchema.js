const sequelize = require("../database/connectToDB");
const { DataTypes } = require("sequelize");

const TopicSchema = sequelize.define('Topics', {
    label: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

// sequelize.sync();
module.exports = TopicSchema;
