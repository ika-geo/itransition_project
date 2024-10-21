const {createFilledForm} = require("../utils/handleControllers/filledFormUtils");
const FormSchema = require("../schema/FormSchema");
const FilledFormSchema = require("../schema/FilledFormSchema");
const {filledFormOptions} = require("../utils/options/filledFormOptions");
const renameKeys = require("../utils/createDto");


const filledFormController = {
    createFilledForm: async (req, res) => {
        try {
            const form = await createFilledForm(req, res)
            if (!form) return
            res.status(201).json();
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    },
    getFilledFormsByUserId: async (req, res) => {
        const {userId} = req.params;
        try {
            const forms = await FormSchema.findAll({where: {userId}});
            let formId = forms.map(item => item.id)
            let filledForms = await FilledFormSchema.findAll(filledFormOptions(formId));
            let renamedFilledForms = filledForms.map(item=>renameKeys(item, ['filledForm_user', 'filledForm_form'], ['user', 'form']))
            res.status(200).json(renamedFilledForms);
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    },
    deleteFilledForm: async (req, res) => {
        const {id} = req.params;
        try {
            const filledForm = await FilledFormSchema.findByPk(id);
            if (!filledForm) return res.status(404).json({error: "Filled Form not found"});
            await filledForm.destroy();
            res.status(204).send();
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    }
}


module.exports = filledFormController