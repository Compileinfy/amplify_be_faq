import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { getAmplifyDataClientConfig } from '@aws-amplify/backend/function/runtime';
// Update the import path to the correct relative path or actual module location
import { env } from "$amplify/env/post-confirmation";
import { profileGroups } from './../profileGroups';

import {
    CognitoIdentityProviderClient,
    AdminAddUserToGroupCommand
} from '@aws-sdk/client-cognito-identity-provider';

const { resourceConfig, libraryOptions } = await getAmplifyDataClientConfig(
  env
);

Amplify.configure(resourceConfig, libraryOptions);

const client = generateClient<Schema>();
const cognitoClient = new CognitoIdentityProviderClient();

async function addUserToGroup(username: string, userPoolId: string): Promise<void> {
    const command = new AdminAddUserToGroupCommand({
        GroupName: profileGroups.USER,
        Username: username,
        UserPoolId: userPoolId
    });

    const response = await cognitoClient.send(command);
    console.log("User added to Cognito group", { requestId: response.$metadata.requestId });
}


export const handler: PostConfirmationTriggerHandler = async (event) => {

   const userId = event.request.userAttributes.sub;
    const email = event.request.userAttributes.email;
    const username = event.userName;
    const userPoolId = event.userPoolId;
    console.log("Post confirmation event:", { userId, email, username, userPoolId });

  await client.models.userModel.create({
      email: event.request.userAttributes.email,
  });

   try {
            await addUserToGroup(username, userPoolId);
        } catch (groupError) {
            console.log("Failed to add user to group", groupError);
        }

  return event;
};