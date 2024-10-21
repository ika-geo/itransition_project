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
        validate: { notEmpty: { msg: 'Title is required' } }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { notEmpty: { msg: 'Description is required' } }
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
        type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    topicId:{
        type: DataTypes.INTEGER,
        references: {
            model: 'Topics',
            key: 'id',
        }
    }
})

sequelize.sync();
module.exports = FormSchema;