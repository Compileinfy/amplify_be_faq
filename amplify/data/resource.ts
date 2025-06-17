import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

import { UserModel } from './models/UserModel';
import { QuestionModel } from './models/QuestionModel';
import { AnswerModel } from './models/AnswerModel';

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
