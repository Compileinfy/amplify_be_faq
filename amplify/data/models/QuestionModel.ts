import { a } from '@aws-amplify/backend';

export const QuestionModel = a
  .model({
    questionid: a.id().required(),
    question: a.string().required(),
    askedBy: a.belongsTo("userId",'UserModel'),
    tags: a.string().array(), 
    answers: a.hasMany( "answerid" ,'AnswerModel' ), 
    
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  }).identifier(["questionid"]);