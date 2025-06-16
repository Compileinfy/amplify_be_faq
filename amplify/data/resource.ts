import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

import { UserModel } from './model/UserModel';
import { QuestionModel } from './model/QuestionModel';
import { AnswerModel } from './model/AnswerModel';


const schema = a.schema({
  UserModel,
  QuestionModel,
  AnswerModel,
}).authorization((allow) => [
  allow.authenticated(),
]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

