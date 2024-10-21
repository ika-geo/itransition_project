const UserSchema = require("../../schema/UserSchema");
const FormSchema = require("../../schema/FormSchema");


const userOptions = {
    model: UserSchema,
    as: 'filledForm_user',
    attributes: ['id', 'name']
}

const formOptions = {
    model: FormSchema,
    as: 'filledForm_form',
    attributes: ['title', 'id', 'userId']
}

module.exports.filledFormOptions = (formId) => {
    return {
        where: {formId},
        attributes:{
            exclude: ['userId', 'formId', 'updatedAt']
        },
        include: [userOptions, formOptions]
    }
}