const FormFieldSchema = require("../../schema/FormFieldSchema");
const FormSchema = require("../../schema/FormSchema");
const {getFormByIdOptions} = require("../options/formOptions");
const sequelize = require("../../database/connectToDB");

const valuesForUpdate = ['name', 'position', 'type', 'options']

const createUpdateFormFields = async (formData, form, transaction, res)=>{
    let formFields = []
    formData.formFields.map(async (item, index) => {
        formFields.push({...item, position: index+1, formId:form.id})
    });
    try{
        await FormFieldSchema.bulkCreate(formFields, {updateOnDuplicate: valuesForUpdate, transaction})
        return true
    }
    catch (e) {
        res.status(500).json({error: "An error occurred while creating/updating form fields: " + e.message}).end();
        return false
    }
}

module.exports.findForm = async (res, id)=>{
    try{
        const form = await FormSchema.findOne(getFormByIdOptions(id));
        if (!form) {
            res.status(404).json({message: "Form not found"}).end();
            return false
        }
        return form
    }
    catch (e){
        res.status(500).json({error: "An error occurred while finding the form: " + e.message}).end();
        return false
    }
}

module.exports.handleCreateForm = async (formData, res)=>{
    try{
        const transaction = await sequelize.transaction()
        const form = await FormSchema.create(formData, { transaction });
        const createFormFields = await createUpdateFormFields(formData, form, transaction, res)
        if (!createFormFields) return false
        await transaction.commit();
        return true
    }
    catch (e){
        res.status(500).json({error: "An error occurred while creating/updating the form: " + e.message}).end();
        return false
    }
}

module.exports.handleUpdateForm = async (formData, res, id)=>{
    try{
        const transaction = await sequelize.transaction()
        const form = await module.exports.findForm(res, id);
        if (!form) return false;
        await form.update(formData, { transaction });
        const createFormFields = await createUpdateFormFields(formData, form, transaction, res)
        if (!createFormFields) return false
        await transaction.commit();
        return true
    }
    catch (e){
        res.status(500).json({error: "An error occurred while updating the form: " + e.message}).end();
        return false
    }
}


