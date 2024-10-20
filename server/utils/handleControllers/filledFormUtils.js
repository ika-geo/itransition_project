const FilledFormSchema = require("../../schema/FilledFormSchema");
const sequelize = require("../../database/connectToDB");
const FilledFormItemSchema = require("../../schema/FilledFormItemsSchema");
const valuesForUpdate = ['question', 'answer']

const createUpdateFilledFormItems = async (items, filledFormId, transaction, res)=>{
    let myItems = []
    items.map((item) => {
        myItems.push({...item, filledFormId})
    });
    console.log(myItems)
    try{
        await FilledFormItemSchema.bulkCreate(myItems, {updateOnDuplicate: valuesForUpdate,transaction})
        return true
    }
    catch (e) {
        console.log(e.message)
        res.status(500).json({error:  e.message});
        return false
    }
}

module.exports.createFilledForm=async (req, res)=>{
    try{
        const transaction = await sequelize.transaction()
        const filledForm = await FilledFormSchema.create(req.body.data);
        console.log(filledForm.id)
        await createUpdateFilledFormItems(req.body.data.items, filledForm.id, transaction, res)
        if (!createUpdateFilledFormItems) return false;
        await transaction.commit();
        return filledForm.id
    }
    catch (e){
        res.status(500).json({error: e.message});
        return false
    }
}