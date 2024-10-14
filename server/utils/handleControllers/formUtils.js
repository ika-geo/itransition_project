const FormFieldSchema = require("../../schema/FormFieldSchema");
const FormSchema = require("../../schema/FormSchema");
const {getFormByIdOptions} = require("../options/formOptions");


module.exports.findForm = async (res, id)=>{
    const form = await FormSchema.findOne(getFormByIdOptions(id));
    if (!form) {
        res.status(404).json({message: "Form not found"});
        return null
    }
    return form
}

const createFormField = async(item, form, index)=>{
    item.formId = form.id;
    item.position = index + 1
    await FormFieldSchema.create(item);
}

const updateFormField = async(item, index)=>{
    const formField = await FormFieldSchema.findByPk(item.id)
    await formField.update({position:index + 1, ...item});
}


module.exports.createFormFields = async (formData, form)=>{
    await Promise.all(formData.formFields.map(async (item, index) => {
        await createFormField(item, form, index)
    }));
}

module.exports.updateFormFields = async (formData, form)=>{
    await Promise.all(formData.formFields.map(async (item, index) => {
        try {
            if (!item?.id) await createFormField(item, form, index)
            else{
                await updateFormField(item, index)
            }
        } catch (error) {
            console.error(`Error processing field with id ${item?.id}:`, error);
        }
    }));
}