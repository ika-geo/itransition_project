const {createFilledForm} = require("../utils/handleControllers/filledFormUtils");
const {} = require("../utils/handleControllers/formUtils");
const filledFormController = {

    createFilledForm: async (req, res) => {
        try{
            const form =  await createFilledForm(req, res)
            if (!form) return
            res.status(201).json();
        }
        catch (e) {
            res.status(500).json({error: e.message});
        }
    },

}


module.exports = filledFormController