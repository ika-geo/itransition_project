const sequelize = require("../database/connectToDB");
const {DataTypes} = require("sequelize");


const FormSchema = sequelize.define('Forms', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true,
        },
        allowNull: true,
        defaultValue: null,
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
    }
})

sequelize.sync();
module.exports = FormSchema;