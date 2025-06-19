import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

import { postConfirmation } from "../auth/post-confirmation/resource";

import { UserModel } from './models/UserModel';
import { QuestionModel } from './models/QuestionModel';
import { AnswerModel } from './models/AnswerModel';
import { FormModel } from './models/FormModel';


const schema: ReturnType<typeof a.schema> = a.schema({
  userModel: UserModel,
  questionModel: QuestionModel,
  answerModel: AnswerModel,
  formModel: FormModel,
}).authorization((allow) => [
  allow.authenticated(),
  allow.resource(postConfirmation)
]);

// Use type assertion to avoid deep type instantiation issues
// Infer the schema type directly to avoid deep type instantiation issues
export type Schema = typeof schema;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
