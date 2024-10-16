const UserSchema = require("../../schema/UserShcmea");
const FormFieldSchema = require("../../schema/FormFieldSchema");


const userOptions = {
    model: UserSchema,
    as: 'user',
    attributes: ['id', 'name']
}

const formFieldOptions = {
    model: FormFieldSchema,
    as: 'formFields',
    order: [['position', 'ASC']],
    attributes: {
        exclude: ['formId']
    }
}

module.exports.getFormByUserIdOptions = (userId) => {
    return {
        where: {userId},
        order: [['createdAt', 'desc']],
        include: [
            formFieldOptions
        ],
    }
}

module.exports.getAllFormOptions = () => {
    return {
        include: [userOptions],
        attributes: {
            exclude: ['userId']
        }
    };
}


module.exports.getFormByIdOptions = (id) => {
    return {
        where: {id},
        include: [
            formFieldOptions,
            userOptions
        ],
        attributes: {
            exclude: ['userId']
        }
    }
}