import { Request, Controller, Route, Get } from 'tsoa';

@Route('/v1/boards')
// @Security("jwt_auth")
// @Response("401", "JWT token is missing or invalid")
export class BoardController extends Controller {
  constructor() {
    super();
  }

  @Get()
  public async listBoards(@Request() request: any): Promise<{ msg: string }> {
    console.log('getAllSharedCases');
    return {
      msg: 'Hello getAllSharedCases'
    };
  }
}
