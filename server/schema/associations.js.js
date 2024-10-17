const FormSchema = require('./FormSchema')
const FormFieldSchema = require('./FormFieldSchema')
const UserSchema = require("./UserShcmea");
const TagSchema = require("./TagSchema")



// TagSchema.hasMany(FormSchema, { foreignKey: 'Tag'});
// FormSchema.hasMany(TagSchema, { foreignKey: 'Tag', as: 'tag' });

UserSchema.hasMany(FormSchema, { foreignKey: 'userId'});
FormSchema.belongsTo(UserSchema, { foreignKey: 'userId', as: 'user' });

FormSchema.hasMany(FormFieldSchema, { foreignKey: 'formId', as: 'formFields' });
FormFieldSchema.belongsTo(FormSchema, { foreignKey: 'formId'});

