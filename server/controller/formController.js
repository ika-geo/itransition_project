const FormSchema = require("../schema/FormSchema");
const {getAllFormOptions} = require("../utils/options/formOptions");
const {createFormFields, findForm, updateFormFields} = require("../utils/handleControllers/formUtils");
const FormFieldSchema = require("../schema/FormFieldSchema");


const formController = {
    getAllForm: async (req, res) => {
        try {
            const form = await FormSchema.findAll(getAllFormOptions());
            res.status(200).json(form);
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    },

    getFormById: async (req, res) => {
        const {id} = req.params;
        try {
            const form = await findForm(res, id);
            if (!form) return
            res.status(200).json(form);
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    },

    createForm: async (req, res) => {
        const {formData} = req.body;
        try {
            const form = await FormSchema.create(formData);
            await createFormFields(formData, form)
            res.status(201).json(form);
        } catch (e) {
            res.status(500).json({error: "An error occurred while creating the form: " + e.message});
        }
    },
    updateForm: async (req, res) => {
        const {id} = req.params;
        const {formData} = req.body;
        try {
            const form = await findForm(res, id);
            if (!form) return
            await form.update(formData);
            await updateFormFields(formData, form)
            res.status(200).json(form);
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    },
    deleteForm: async (req, res) => {
        const {id} = req.params;
        try {
            const form = await findForm(res, id);
            if (!form) return
            await form.destroy();
            res.status(204).json();
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    },
    deleteFormField: async (req, res) => {
        const {id} = req.params;
        try {
            const formField = await FormFieldSchema.findByPk(id)
            if (!formField) return res.status(404).json({message: "Cant find field"});
            await formField.destroy();
            res.status(204).json();
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }
}

module.exports = formController