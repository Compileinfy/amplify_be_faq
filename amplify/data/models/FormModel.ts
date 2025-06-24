import { a } from '@aws-amplify/backend';

export const FormModel = a
  .model({
    formId: a.id(),
    title : a.string().required(),
    userId: a.id().required(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    formQuestions: a.hasMany('questionModel', 'formId'),
    createdBy: a.belongsTo('userModel', 'userId'),
  }).identifier(["formId"]);