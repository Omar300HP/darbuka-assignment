"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = exports.ForbiddenError = exports.UnauthorizedError = exports.InternalServerError = exports.NotFoundError = exports.BadRequestError = void 0;
class BadRequestError extends Error {
    details;
    constructor(message, details) {
        super();
        this.message = message;
        this.details = details;
    }
}
exports.BadRequestError = BadRequestError;
class NotFoundError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}
exports.NotFoundError = NotFoundError;
class InternalServerError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}
exports.InternalServerError = InternalServerError;
class UnauthorizedError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}
exports.ForbiddenError = ForbiddenError;
class ConflictError extends Error {
    field;
    constructor(message, field) {
        super();
        this.message = message;
        this.field = field;
    }
}
exports.ConflictError = ConflictError;
