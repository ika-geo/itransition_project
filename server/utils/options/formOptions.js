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
    separate: true,
    order: [['position', 'ASC']],
    attributes: {
        exclude: ['formId']
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