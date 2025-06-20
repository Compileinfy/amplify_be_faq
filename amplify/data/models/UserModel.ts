import { a } from '@aws-amplify/backend';

export const UserModel = a
  .model({
    userId: a.id(),
    firstname: a.string(),
    lastname: a.string(),
    email: a.email().required(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    questions: a.hasMany('questionModel', 'userId'),
    answers: a.hasMany('answerModel', 'userId'),
    forms: a.hasMany('formModel', 'userId'),
  }).identifier(["userId"]);