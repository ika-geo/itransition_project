const FormSchema = require('./FormSchema')
const FormFieldSchema = require('./FormFieldSchema')
const UserSchema = require("./UserShcmea");


UserSchema.hasMany(FormSchema, { foreignKey: 'userId'});
FormSchema.belongsTo(UserSchema, { foreignKey: 'userId', as: 'user' });

FormSchema.hasMany(FormFieldSchema, { foreignKey: 'formId', as: 'formFields' });
FormFieldSchema.belongsTo(FormSchema, { foreignKey: 'formId'});

