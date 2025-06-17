import { a } from '@aws-amplify/backend';

export const AnswerModel = a
  .model({
    answerid: a.id().required(),
    answer: a.string().required(),
    question: a.belongsTo("question", 'QuestionModel'),
    answeredBy: a.belongsTo("answeredBy", 'UserModel'),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  }).identifier(['answerid']);