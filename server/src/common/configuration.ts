import { config } from 'dotenv';

config({ path: process.env.DOTENV_CONFIG_PATH });

const _getInt = (envVar: string | undefined, defaultValue: number) => {
  return envVar && parseInt(envVar) ? parseInt(envVar) : defaultValue;
};

// Const _getBool = (envVar: string | undefined, defaultValue: boolean) => {
//     If (envVar == undefined)
//         Return defaultValue;

//     Return envVar.toLowerCase() === 'true' ? true : false;
// }

export const INVALID_CONFIGURATION = 'Invalid';

export interface Configuration {
  db?: {
    url: string;
  };

  server?: {
    port: number;
    host?: string;
  };
  auth?: {
    userPoolId: string;
    clientId: string;
    identityServiceUrl: string;
  };
  ses?: {
    accessKey: string;
    accessSecret: string;
    region: string;
    endpoint?: string;
    verifiedIdentity: string;
  };
}

export const defaultConfiguration: Configuration = {
  db: {
    url: process.env.DATABASE_URL || INVALID_CONFIGURATION
  },

  server: {
    port: _getInt(process.env.PORT, 5000),
    host: process.env.HOST
  }
};

export default Configuration;
