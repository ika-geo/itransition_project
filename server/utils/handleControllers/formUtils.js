const FormFieldSchema = require("../../schema/FormFieldSchema");
const FormSchema = require("../../schema/FormSchema");
const {getFormByIdOptions} = require("../options/formOptions");
const sequelize = require("../../database/connectToDB");

const valuesForUpdate = ['name', 'position', 'type', 'options']
const sequelizeValidationError = 'SequelizeValidationError'


const handleSequelizeValidationErrors = (err, res) => {
    const messages = err.errors.map(err => err.message);
    res.status(400).json({ message: messages[0] });
}

const createUpdateFormFields = async (formData, formId, transaction, res)=>{
    let formFields = []
    console.log(formData.formFields)
    formData.formFields.map(async (item, index) => {
        formFields.push({...item, position: index+1, formId})
    });
    try{
        await FormFieldSchema.bulkCreate(formFields, {updateOnDuplicate: valuesForUpdate, transaction})
        return true
    }
    catch (e) {
        res.status(500).json({error:  e.message});
        return false
    }
}

module.exports.findForm = async (res, id)=>{
    try{
        const form = await FormSchema.findOne(getFormByIdOptions(id));
        if (!form) {
            res.status(404).json({message: "Form not found"});
            return false
        }
        return form
    }
    catch (e){
        res.status(500).json({error:  e.message});
        return false
    }
}

module.exports.handleCreateForm = async (formData, res)=>{
    try{
        const transaction = await sequelize.transaction()
        const form = await FormSchema.create(formData, { transaction });
        const createFormFields = await createUpdateFormFields(formData, form.id, transaction, res)
        if (!createFormFields) return false
        await transaction.commit();
        return form
    }
    catch (e){
        if (e.name === sequelizeValidationError) {
            handleSequelizeValidationErrors(e, res)
            return false
        }
        res.status(500).json({error:  e.message});
        return false
    }
}

module.exports.handleUpdateForm = async (formData, res, id)=>{
    try{
        const transaction = await sequelize.transaction()
        const form = await module.exports.findForm(res, id);
        if (!form) return false;
        const updatedForm = await form.update(formData, { transaction });
        const createFormFields = await createUpdateFormFields(formData, formData.id, transaction, res)
        if (!createFormFields) return false
        await transaction.commit();
        return updatedForm
    }
    catch (e){
        res.status(500).json({error:  e.message});
        return false
    }
}


