const CommentSchema = require("../../schema/CommentSchema");
const {Op} = require("sequelize");
const FormFieldSchema = require("../../schema/FormFieldSchema");
const TopicSchema = require("../../schema/TopicSchema");
const FormSchema = require("../../schema/FormSchema");
const {getAllFormOptions} = require("../options/formOptions");


const findInFormTitleDescription = async(res, searchWord, formIds)=>{
    try{
        const forms = await FormSchema.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.iLike]: `%${searchWord}%` } },
                    { description: { [Op.iLike]: `%${searchWord}%` } }
                ]
            },
            attributes: ['id']
        });
        forms.forEach(form => formIds.add(form.id));
        return true
    }
    catch (e){
        res.status(500).json({ error: e.message });
        return false;
    }
}

const findInComments = async(res, searchWord, formIds)=>{
    try{
        const comments = await CommentSchema.findAll({
            where: {
                comment: { [Op.iLike]: `%${searchWord}%` }
            },
            attributes: ['formId']
        });
        comments.forEach(comment => formIds.add(comment.formId));
        return true
    }
    catch (e) {
        res.status(500).json({ error: e.message });
        return false;
    }
}

const findInFormFields = async(res, searchWord, formIds)=>{
    try{
        const formFields = await FormFieldSchema.findAll({
            where: {
                name: { [Op.iLike]: `%${searchWord}%` }
            },
            attributes: ['formId']
        });
        formFields.forEach(formField => formIds.add(formField.formId));
        return true
    }
    catch (e) {
        res.status(500).json({ error: e.message });
        return false;
    }
}

const findInTopics = async(res, searchWord, formIds)=>{
    try{
        const topics = await TopicSchema.findAll({
            where: {
                label: { [Op.iLike]: `%${searchWord}%` }
            },
            attributes: ['id']
        });
        const topicIds = topics.map(topic => topic.id);
        const formsWithTopics = await FormSchema.findAll({
            where: {
                topicId: { [Op.in]: topicIds }
            },
            attributes: ['id']
        });
        formsWithTopics.forEach(form => formIds.add(form.id));
        return true
    }
    catch (e) {
        res.status(500).json({ error: e.message });
        return false;
    }
}


const getFormBySearchWord = async(req, res, searchWord)=>{
    try {
        let formIds = new Set();

        const title_descriptions = await findInFormTitleDescription(res, searchWord, formIds)
        if (title_descriptions===false) return false

        const comments = await findInComments(res, searchWord, formIds)
        if (comments===false) return false

        const formFields = await findInFormFields(res, searchWord, formIds)
        if (formFields===false) return false

        const topics = await findInTopics(res, searchWord, formIds)
        if (topics===false) return false

        formIds = Array.from(formIds);

        const searchForms = await FormSchema.findAll({
            ...getAllFormOptions(),
            where: {
                id: { [Op.in]: formIds }
            }
        });
        return searchForms;
    } catch (e) {
        res.status(500).json({ error: e.message });
        return false;
    }


}


module.exports = getFormBySearchWord