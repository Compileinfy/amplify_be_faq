import { a } from '@aws-amplify/backend';

export const AnswerModel = a
  .model({
    answerId: a.id(),

    questionId: a.id(),
    userId: a.id(),
    formId: a.id().required(),
    selectedOptions: a.string().array().required(),
    questions: a.belongsTo('questionModel','questionId'),

    answeredby: a.belongsTo('userModel','userId'),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  }).identifier(["answerId"])
  .secondaryIndexes(index => [
    index("formId").name("AnswersByFormId"), 
  ]);
