import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { postConfirmation } from "../auth/post-confirmation/resource";

import { UserModel } from './models/UserModel';
import { QuestionModel } from './models/QuestionModel';
import { AnswerModel } from './models/AnswerModel';
import { FormModel } from './models/FormModel';


const schema = a.schema({
  userModel:UserModel,
  questionModel:QuestionModel,
  answerModel:AnswerModel,
  formModel:FormModel,

}).authorization((allow) => [
  allow.authenticated(),
  allow.resource(postConfirmation)
]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});