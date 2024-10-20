const FormSchema = require('./FormSchema')
const FormFieldSchema = require('./FormFieldSchema')
const UserSchema = require("./UserSchema");
const TopicSchema = require("./TopicSchema");
const FilledFormSchema = require("./FilledFormSchema");
const FilledFormItemSchema = require("./FilledFormItemsSchema");



FilledFormItemSchema.belongsTo(FilledFormSchema, { foreignKey: 'filledFormId'});
FilledFormSchema.hasMany(FilledFormItemSchema, { foreignKey: 'filledFormId'});

FilledFormSchema.belongsTo(FormSchema, { foreignKey: 'formId'});
FormSchema.hasMany(FilledFormSchema, { foreignKey: 'formId'});

FormSchema.belongsTo(TopicSchema, { foreignKey: 'topicId', as: 'topic' });
TopicSchema.hasMany(FormSchema, { foreignKey: 'topicId', as: 'forms' });

UserSchema.hasMany(FormSchema, { foreignKey: 'userId'});
FormSchema.belongsTo(UserSchema, { foreignKey: 'userId', as: 'user' });

FormSchema.hasMany(FormFieldSchema, { foreignKey: 'formId', as: 'formFields' });
FormFieldSchema.belongsTo(FormSchema, { foreignKey: 'formId'});

