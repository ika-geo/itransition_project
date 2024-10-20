const {DataTypes} = require('sequelize')

const sequelize = require("../database/connectToDB")

const UserSchema = sequelize.define("Users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Please enter a valid email address.'
            },
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user',
    },
    blocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
})

// sequelize.sync();
module.exports = UserSchema;