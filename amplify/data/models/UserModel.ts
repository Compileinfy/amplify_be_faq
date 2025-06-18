import { a } from '@aws-amplify/backend';

export const UserModel = a
  .model({
    userId: a.id().required(),
    username: a.string().required(),
    isAdmin: a.boolean().default(false),
    isModerator: a.boolean().default(false),
    email: a.email().required(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    questions: a.hasMany('questionModel', 'userId'),
    answers: a.hasMany('answerModel', 'userId'),
    forms: a.hasMany('formModel', 'userId'),
  }).identifier(["userId"]);