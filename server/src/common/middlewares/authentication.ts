// Tsoa authentication => https://www.npmjs.com/package/tsoa/v/3.0.6#authentication

/* eslint-disable import/no-unresolved */
// import { CognitoJwtVerifier } from 'aws-jwt-verify';
// import { JsonFetcher } from 'aws-jwt-verify/https';
// import { SimpleJwksCache } from 'aws-jwt-verify/jwk';
// import axios from 'axios';
import { Request } from 'express';

import { type Configuration, defaultConfiguration } from '../configuration';
import { UnauthorizedError, InternalServerError } from '../errors';

// class CustomFetcher implements JsonFetcher {
//   instance = axios.create();
//   public async fetch(uri: string) {
//     return this.instance.get(uri).then((response) => response.data);
//   }
// }

export const authentication = (
  config: Configuration = defaultConfiguration
) => {
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

  return async (
    req: Request,
    securityName = 'jwt_auth',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    scopes?: string[]
  ): Promise<any> => {
    if (securityName.toLocaleLowerCase() !== 'jwt_auth') {
      return Promise.reject(
        new InternalServerError('only jwt security is allowed')
      );
    }

    if (!req.headers?.authorization) {
      return Promise.reject(
        new UnauthorizedError('Authorization header is missing')
      );
    }

    if (req.headers.authorization.split(' ')[0] !== 'Bearer') {
      return Promise.reject(
        new UnauthorizedError('Bearer token is not provided')
      );
    }

    try {
      const token = req.headers.authorization.split(' ')[1];
      //   const user = await verifier.verify(token);

      return Promise.resolve({ id: 'user.sub' });
    } catch (e: any) {
      return Promise.reject(
        new UnauthorizedError(`Invalid token, ${e.message}`)
      );
    }
  };
};

export const expressAuthentication = authentication(defaultConfiguration); // Used by tsoa
