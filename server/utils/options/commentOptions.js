const UserSchema = require("../../schema/UserSchema");
const FormSchema = require("../../schema/FormSchema");


const userOptions = {
        model: UserSchema,
        as: 'comment_user',
        attributes: ['id', 'name']
}

const formOptions = {
        model: FormSchema,
        as: 'comment_form',
        attributes: ['title', 'id']
}


module.exports.getAllCommentsOptions = (formId)=>{
    return {
        where: {formId},
        include: [
            userOptions, formOptions
        ],
        attributes: {
            exclude: ['userId', 'updatedAt']
        }
    }
}