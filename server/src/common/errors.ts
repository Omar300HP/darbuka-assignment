export class BadRequestError extends Error {
  details;

  constructor(message: string, details?: any) {
    super();
    this.message = message;
    this.details = details;
  }
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

export class InternalServerError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

export class ForbiddenError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

export class ConflictError extends Error {
  field;
  constructor(message: string, field: string) {
    super();
    this.message = message;
    this.field = field;
  }
}
