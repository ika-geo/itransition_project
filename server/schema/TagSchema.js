const sequelize = require("../database/connectToDB");
const { DataTypes } = require("sequelize");

const TagSchema = sequelize.define('Tags', {
    label: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

sequelize.sync();
module.exports = TagSchema;
