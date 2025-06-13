"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var backend_1 = require("@aws-amplify/backend");
exports.auth = (0, backend_1.defineAuth)({
    loginWith: {
        email: true,
    },
    userAttributes: {
        email: {
            required: true,
        },
    },
});
