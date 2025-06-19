import { a } from '@aws-amplify/backend';

export const AnswerModel = a
  .model({
    answerId: a.id().required(),
    answer: a.string().required(),
    selectedOptions : a.string().array().required(),
    questionId: a.id().required(),
    userId: a.id().required(),
    questions: a.belongsTo('questionModel','questionId'),
    answeredby: a.belongsTo('userModel','userId'),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  }).identifier(["answerId"]);;