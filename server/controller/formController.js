const FormSchema = require("../schema/FormSchema");
const {getAllFormOptions, getFormByUserIdOptions} = require("../utils/options/formOptions");
const {findForm, handleCreateForm, handleUpdateForm} = require("../utils/handleControllers/formUtils");
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

    getFormByUserId: async (req, res)=>{
        const {userId} = req.params;
        try {
            const form = await FormSchema.findAll(getFormByUserIdOptions(userId));
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
        const formData = JSON.parse(req.body.formData);
        try {
            const form =  await handleCreateForm(req, formData, res)
            if (!form) return
            res.status(201).json(form);
        } catch (e) {
            res.status(500).json({error: "An error occurred while creating the form: " + e.message});
        }
    },
    updateForm: async (req, res) => {
        const {id} = req.params;
        const formData = JSON.parse(req.body.formData);
        try {
            const UpdateForm = await handleUpdateForm(req, formData, res, id);
            if (!UpdateForm) return
            res.status(200).json(UpdateForm);
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