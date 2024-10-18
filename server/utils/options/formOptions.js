const UserSchema = require("../../schema/UserShcmea");
const FormFieldSchema = require("../../schema/FormFieldSchema");
const TopicSchema = require("../../schema/TopicSchema");


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

const topicsOptions = {
    model: TopicSchema,
    as: 'topic',
    attributes: ['id', 'label']
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
            userOptions,
            topicsOptions
        ],
        attributes: {
            exclude: ['userId']
        }
    }
}