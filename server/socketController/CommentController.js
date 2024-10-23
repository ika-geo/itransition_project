const CommentSchema = require("../schema/CommentSchema")
const {getAllCommentsOptions} = require("../utils/options/commentOptions");
const renameKeys = require("../utils/createDto");



const commentController = {
    getCommentsByFormId: async (formId)=>{
        try {
            const comments = await CommentSchema.findAll(getAllCommentsOptions(formId));
            return comments.map(item => renameKeys(item, ['comment_user', 'comment_form'], ['user', 'form']))
        } catch (e) {
            console.log(e)
            return []
        }
    },
    createComment: async (data)=>{
        try {
            await CommentSchema.create(data);
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = commentController;