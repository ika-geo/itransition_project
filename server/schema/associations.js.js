const FormSchema = require('./FormSchema')
const FormFieldSchema = require('./FormFieldSchema')
const UserSchema = require("./UserShcmea");
const TopicSchema = require("./TopicSchema");



FormSchema.belongsTo(TopicSchema, { foreignKey: 'topicId', as: 'topic' });
TopicSchema.hasMany(FormSchema, { foreignKey: 'topicId', as: 'forms' });

UserSchema.hasMany(FormSchema, { foreignKey: 'userId'});
FormSchema.belongsTo(UserSchema, { foreignKey: 'userId', as: 'user' });

FormSchema.hasMany(FormFieldSchema, { foreignKey: 'formId', as: 'formFields' });
FormFieldSchema.belongsTo(FormSchema, { foreignKey: 'formId'});

