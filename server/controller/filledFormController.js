const {createFilledForm} = require("../utils/handleControllers/filledFormUtils");
const FormSchema = require("../schema/FormSchema");
const FilledFormSchema = require("../schema/FilledFormSchema");
const {filledFormOptions, getFilledFormByIdOptions, getAllFilledForms} = require("../utils/options/filledFormOptions");
const renameKeys = require("../utils/createDto");
const FilledFormItemSchema = require("../schema/FilledFormItemsSchema");


const filledFormController = {
    getAllFiledForms: async (req, res)=>{
        try {
            const filledForms = await FilledFormSchema.findAll(getAllFilledForms());
            let renamedFilledForms = filledForms.map(item => renameKeys(item, ['filledForm_user', 'filledForm_form'], ['user', 'form']))
            res.status(200).json(renamedFilledForms);
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    },

    getFilledFormById: async (req, res) => {
        const {id} = req.params;
        try {
            const filledForm = await FilledFormSchema.findOne(getFilledFormByIdOptions(id));
            let renamedFilledForm = renameKeys(filledForm, ['filledForm_form', 'filledForm_filledFormItem', "filledForm_user"], ['form', 'items', "user"])
            if (!filledForm) return res.status(404).json({error: "Filled Form not found"});
            res.status(200).json(renamedFilledForm);
        } catch (e) {
            res.status(500).json({error: e.message});
        }
    },

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
            let renamedFilledForms = filledForms.map(item => renameKeys(item, ['filledForm_user', 'filledForm_form'], ['user', 'form']))
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
    },
    editFilledFormItems: async (req, res) => {
        try {
            await Promise.all(
                req.body.data.map(async (item) => {
                    await FilledFormItemSchema.update(
                        {answer: item.answer, question: item.question},
                        {
                            where: {id: item.id},
                        }
                    );
                })
            );
            res.status(200).json()
        } catch (e) {
            console.log(e)
            res.status(500).json({error: e.message});
        }
    }
}


module.exports = filledFormController