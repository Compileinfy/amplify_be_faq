import { a } from '@aws-amplify/backend';

export const QuestionModel = a
  .model({
    questionId: a.id(),
    question: a.string().required(),
    userId: a.id().required(),
    formId: a.id().required(),
    options: a.string().array().required(),
    askedby: a.belongsTo('userModel','userId'), 
    answers: a.hasMany('answerModel','questionId'),
    form: a.belongsTo('formModel', 'formId'),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  }).identifier(["questionId"])
  .secondaryIndexes(index => [index("formId").name("QuestionsByformId")]);