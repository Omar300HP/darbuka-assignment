"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultConfiguration = exports.INVALID_CONFIGURATION = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: process.env.DOTENV_CONFIG_PATH });
const _getInt = (envVar, defaultValue) => {
    return envVar && parseInt(envVar) ? parseInt(envVar) : defaultValue;
};
// Const _getBool = (envVar: string | undefined, defaultValue: boolean) => {
//     If (envVar == undefined)
//         Return defaultValue;
//     Return envVar.toLowerCase() === 'true' ? true : false;
// }
exports.INVALID_CONFIGURATION = 'Invalid';
exports.defaultConfiguration = {
    db: {
        url: process.env.DATABASE_URL || exports.INVALID_CONFIGURATION
    },
    server: {
        port: _getInt(process.env.PORT, 5000),
        host: process.env.HOST
    }
};
