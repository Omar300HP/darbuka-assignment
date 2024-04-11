"use strict";
// Tsoa authentication => https://www.npmjs.com/package/tsoa/v/3.0.6#authentication
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = exports.authentication = void 0;
const configuration_1 = require("../configuration");
const errors_1 = require("../errors");
// class CustomFetcher implements JsonFetcher {
//   instance = axios.create();
//   public async fetch(uri: string) {
//     return this.instance.get(uri).then((response) => response.data);
//   }
// }
const authentication = (config = configuration_1.defaultConfiguration) => {
    //   const userPoolId = config.auth.userPoolId;
    //   const clientId = config.auth.clientId;
    //   if (
    //     userPoolId === INVALID_CONFIGURATION ||
    //     clientId === INVALID_CONFIGURATION
    //   ) {
    //     throw new InternalServerError('aws cognito configurations are not defined');
    //   }
    //   const verifier = CognitoJwtVerifier.create(
    //     { userPoolId, tokenUse: 'access', clientId },
    //     { jwksCache: new SimpleJwksCache({ fetcher: new CustomFetcher() }) }
    //   );
    return async (req, securityName = 'jwt_auth', 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    scopes) => {
        if (securityName.toLocaleLowerCase() !== 'jwt_auth') {
            return Promise.reject(new errors_1.InternalServerError('only jwt security is allowed'));
        }
        if (!req.headers?.authorization) {
            return Promise.reject(new errors_1.UnauthorizedError('Authorization header is missing'));
        }
        if (req.headers.authorization.split(' ')[0] !== 'Bearer') {
            return Promise.reject(new errors_1.UnauthorizedError('Bearer token is not provided'));
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            //   const user = await verifier.verify(token);
            return Promise.resolve({ id: 'user.sub' });
        }
        catch (e) {
            return Promise.reject(new errors_1.UnauthorizedError(`Invalid token, ${e.message}`));
        }
    };
};
exports.authentication = authentication;
exports.expressAuthentication = (0, exports.authentication)(configuration_1.defaultConfiguration); // Used by tsoa
