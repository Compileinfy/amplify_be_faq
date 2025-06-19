import { a } from '@aws-amplify/backend';

export const QuestionModel = a
  .model({
    questionId: a.id().required(),
    question: a.string().required(),
    options : a.string().array().required(),
    userId: a.id().required(),
    formId: a.id().required(),
    askedby: a.belongsTo('userModel','userId'), 
    answers: a.hasMany('answerModel','questionId'),
    form: a.belongsTo('formModel', 'formId'),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  }).identifier(["questionId"]);