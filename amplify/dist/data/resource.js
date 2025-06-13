"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const backend_1 = require("@aws-amplify/backend");
const schema = backend_1.a.schema({
    Todo: backend_1.a
        .model({
        content: backend_1.a.string(),
        done: backend_1.a.boolean(),
    })
        .authorization((allow) => [allow.owner()]),
});
exports.data = (0, backend_1.defineData)({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: 'userPool',
    },
});
