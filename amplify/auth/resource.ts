import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from './post-confirmation/resource';
import { profileGroups} from './profileGroups';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },

  groups:Object.values(profileGroups),
  
   triggers: {
    postConfirmation
  },

  access:(allow) => [
    allow.resource(postConfirmation).to(['addUserToGroup'])
  ]
});
