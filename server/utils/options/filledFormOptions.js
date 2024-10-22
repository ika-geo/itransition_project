const UserSchema = require("../../schema/UserSchema");
const FormSchema = require("../../schema/FormSchema");
const FilledFormItemSchema = require("../../schema/FilledFormItemsSchema");


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

const filledFormItems= {
    model: FilledFormItemSchema,
    as: 'filledForm_filledFormItem',
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

module.exports.getFilledFormByIdOptions = (id) =>{
    return {
        where: {id},
        include: [formOptions, filledFormItems],
        attributes: {
            exclude: ['userId']
        }
    }
}

module.exports.getAllFilledForms = () =>{
    return {
        attributes:{
            exclude: ['userId', 'formId', 'updatedAt']
        },
        include: [userOptions, formOptions]
    }
}
