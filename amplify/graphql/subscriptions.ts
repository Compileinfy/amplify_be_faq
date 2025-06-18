/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAnswerModel = /* GraphQL */ `subscription OnCreateAnswerModel(
  $filter: ModelSubscriptionAnswerModelFilterInput
  $owner: String
) {
  onCreateAnswerModel(filter: $filter, owner: $owner) {
    answer
    answerId
    answeredby {
      createdAt
      isAdmin
      isModerator
      owner
      updatedAt
      userId
      username
      __typename
    }
    createdAt
    owner
    questionId
    questions {
      createdAt
      formId
      owner
      question
      questionId
      updatedAt
      userId
      __typename
    }
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAnswerModelSubscriptionVariables,
  APITypes.OnCreateAnswerModelSubscription
>;
export const onCreateFormModel = /* GraphQL */ `subscription OnCreateFormModel(
  $filter: ModelSubscriptionFormModelFilterInput
  $owner: String
) {
  onCreateFormModel(filter: $filter, owner: $owner) {
    createdAt
    createdBy {
      createdAt
      isAdmin
      isModerator
      owner
      updatedAt
      userId
      username
      __typename
    }
    formId
    formQuestions {
      nextToken
      __typename
    }
    owner
    title
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFormModelSubscriptionVariables,
  APITypes.OnCreateFormModelSubscription
>;
export const onCreateQuestionModel = /* GraphQL */ `subscription OnCreateQuestionModel(
  $filter: ModelSubscriptionQuestionModelFilterInput
  $owner: String
) {
  onCreateQuestionModel(filter: $filter, owner: $owner) {
    answers {
      nextToken
      __typename
    }
    askedBy {
      createdAt
      isAdmin
      isModerator
      owner
      updatedAt
      userId
      username
      __typename
    }
    createdAt
    form {
      createdAt
      formId
      owner
      title
      updatedAt
      userId
      __typename
    }
    formId
    owner
    question
    questionId
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateQuestionModelSubscriptionVariables,
  APITypes.OnCreateQuestionModelSubscription
>;
export const onCreateUserModel = /* GraphQL */ `subscription OnCreateUserModel(
  $filter: ModelSubscriptionUserModelFilterInput
  $owner: String
) {
  onCreateUserModel(filter: $filter, owner: $owner) {
    answers {
      nextToken
      __typename
    }
    createdAt
    forms {
      nextToken
      __typename
    }
    isAdmin
    isModerator
    owner
    questions {
      nextToken
      __typename
    }
    updatedAt
    userId
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserModelSubscriptionVariables,
  APITypes.OnCreateUserModelSubscription
>;
export const onDeleteAnswerModel = /* GraphQL */ `subscription OnDeleteAnswerModel(
  $filter: ModelSubscriptionAnswerModelFilterInput
  $owner: String
) {
  onDeleteAnswerModel(filter: $filter, owner: $owner) {
    answer
    answerId
    answeredby {
      createdAt
      isAdmin
      isModerator
      owner
      updatedAt
      userId
      username
      __typename
    }
    createdAt
    owner
    questionId
    questions {
      createdAt
      formId
      owner
      question
      questionId
      updatedAt
      userId
      __typename
    }
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAnswerModelSubscriptionVariables,
  APITypes.OnDeleteAnswerModelSubscription
>;
export const onDeleteFormModel = /* GraphQL */ `subscription OnDeleteFormModel(
  $filter: ModelSubscriptionFormModelFilterInput
  $owner: String
) {
  onDeleteFormModel(filter: $filter, owner: $owner) {
    createdAt
    createdBy {
      createdAt
      isAdmin
      isModerator
      owner
      updatedAt
      userId
      username
      __typename
    }
    formId
    formQuestions {
      nextToken
      __typename
    }
    owner
    title
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFormModelSubscriptionVariables,
  APITypes.OnDeleteFormModelSubscription
>;
export const onDeleteQuestionModel = /* GraphQL */ `subscription OnDeleteQuestionModel(
  $filter: ModelSubscriptionQuestionModelFilterInput
  $owner: String
) {
  onDeleteQuestionModel(filter: $filter, owner: $owner) {
    answers {
      nextToken
      __typename
    }
    askedBy {
      createdAt
      isAdmin
      isModerator
      owner
      updatedAt
      userId
      username
      __typename
    }
    createdAt
    form {
      createdAt
      formId
      owner
      title
      updatedAt
      userId
      __typename
    }
    formId
    owner
    question
    questionId
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionModelSubscriptionVariables,
  APITypes.OnDeleteQuestionModelSubscription
>;
export const onDeleteUserModel = /* GraphQL */ `subscription OnDeleteUserModel(
  $filter: ModelSubscriptionUserModelFilterInput
  $owner: String
) {
  onDeleteUserModel(filter: $filter, owner: $owner) {
    answers {
      nextToken
      __typename
    }
    createdAt
    forms {
      nextToken
      __typename
    }
    isAdmin
    isModerator
    owner
    questions {
      nextToken
      __typename
    }
    updatedAt
    userId
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserModelSubscriptionVariables,
  APITypes.OnDeleteUserModelSubscription
>;
export const onUpdateAnswerModel = /* GraphQL */ `subscription OnUpdateAnswerModel(
  $filter: ModelSubscriptionAnswerModelFilterInput
  $owner: String
) {
  onUpdateAnswerModel(filter: $filter, owner: $owner) {
    answer
    answerId
    answeredby {
      createdAt
      isAdmin
      isModerator
      owner
      updatedAt
      userId
      username
      __typename
    }
    createdAt
    owner
    questionId
    questions {
      createdAt
      formId
      owner
      question
      questionId
      updatedAt
      userId
      __typename
    }
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAnswerModelSubscriptionVariables,
  APITypes.OnUpdateAnswerModelSubscription
>;
export const onUpdateFormModel = /* GraphQL */ `subscription OnUpdateFormModel(
  $filter: ModelSubscriptionFormModelFilterInput
  $owner: String
) {
  onUpdateFormModel(filter: $filter, owner: $owner) {
    createdAt
    createdBy {
      createdAt
      isAdmin
      isModerator
      owner
      updatedAt
      userId
      username
      __typename
    }
    formId
    formQuestions {
      nextToken
      __typename
    }
    owner
    title
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFormModelSubscriptionVariables,
  APITypes.OnUpdateFormModelSubscription
>;
export const onUpdateQuestionModel = /* GraphQL */ `subscription OnUpdateQuestionModel(
  $filter: ModelSubscriptionQuestionModelFilterInput
  $owner: String
) {
  onUpdateQuestionModel(filter: $filter, owner: $owner) {
    answers {
      nextToken
      __typename
    }
    askedBy {
      createdAt
      isAdmin
      isModerator
      owner
      updatedAt
      userId
      username
      __typename
    }
    createdAt
    form {
      createdAt
      formId
      owner
      title
      updatedAt
      userId
      __typename
    }
    formId
    owner
    question
    questionId
    updatedAt
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionModelSubscriptionVariables,
  APITypes.OnUpdateQuestionModelSubscription
>;
export const onUpdateUserModel = /* GraphQL */ `subscription OnUpdateUserModel(
  $filter: ModelSubscriptionUserModelFilterInput
  $owner: String
) {
  onUpdateUserModel(filter: $filter, owner: $owner) {
    answers {
      nextToken
      __typename
    }
    createdAt
    forms {
      nextToken
      __typename
    }
    isAdmin
    isModerator
    owner
    questions {
      nextToken
      __typename
    }
    updatedAt
    userId
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserModelSubscriptionVariables,
  APITypes.OnUpdateUserModelSubscription
>;
