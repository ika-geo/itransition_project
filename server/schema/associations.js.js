const FormSchema = require('./FormSchema')
const FormFieldSchema = require('./FormFieldSchema')
const UserSchema = require("./UserSchema");
const TopicSchema = require("./TopicSchema");
const FilledFormSchema = require("./FilledFormSchema");
const FilledFormItemSchema = require("./FilledFormItemsSchema");


FilledFormSchema.hasMany(FilledFormItemSchema, { foreignKey: 'filledFormId', as: 'filledForm_filledFormItem'});
FilledFormItemSchema.belongsTo(FilledFormSchema, { foreignKey: 'filledFormId', as: 'filledForm_filledForm'});

UserSchema.hasMany(FilledFormSchema, { foreignKey: 'userId', as: 'user_filledForm'});
FilledFormSchema.belongsTo(UserSchema, { foreignKey: 'userId', as: 'filledForm_user'});

FormSchema.hasMany(FilledFormSchema, { foreignKey: 'formId', as:'form_filledForm'});
FilledFormSchema.belongsTo(FormSchema, { foreignKey: 'formId', as:"filledForm_form"});

TopicSchema.hasMany(FormSchema, { foreignKey: 'topicId', as: 'topic_form' });
FormSchema.belongsTo(TopicSchema, { foreignKey: 'topicId', as: 'form_topic' });

UserSchema.hasMany(FormSchema, { foreignKey: 'userId', as: 'user_form'});
FormSchema.belongsTo(UserSchema, { foreignKey: 'userId', as: 'form_user' });

FormSchema.hasMany(FormFieldSchema, { foreignKey: 'formId', as: 'form_formField' });
FormFieldSchema.belongsTo(FormSchema, { foreignKey: 'formId', as: 'formField_form'});