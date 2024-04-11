// "files" property added in ts.config

declare namespace Express {
  export interface Request {
    user: { id: string };
  }
}
