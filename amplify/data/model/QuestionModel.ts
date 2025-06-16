import { a } from '@aws-amplify/backend';

export const QuestionModel = a
  .model({
    questionid: a.id().required(),
    question: a.string().required(),
    askedBy: a.belongsTo("userid",'UserModel'),
    tags: a.string().array(),
    answer: a.hasMany("answer",'AnswerModel'),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  }).identifier(["questionid"]);