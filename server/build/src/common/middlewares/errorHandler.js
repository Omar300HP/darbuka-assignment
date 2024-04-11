"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_status_1 = __importDefault(require("http-status"));
const tsoa_1 = require("tsoa");
const errors_1 = require("../errors");
const errorHandler = (err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    if (err instanceof tsoa_1.ValidateError) {
        return res.status(http_status_1.default.BAD_REQUEST).json({
            message: "Validation Failed",
            details: err.fields
        });
    }
    else if (err instanceof errors_1.BadRequestError) {
        return res.status(http_status_1.default.BAD_REQUEST).json({
            message: err.message,
            details: err.details
        });
    }
    else if (err instanceof errors_1.NotFoundError) {
        return res.status(http_status_1.default.NOT_FOUND).json({
            message: err.message
        });
    }
    else if (err instanceof errors_1.ForbiddenError) {
        return res.status(http_status_1.default.FORBIDDEN).json({
            message: err.message
        });
    }
    else if (err instanceof errors_1.UnauthorizedError) {
        return res.status(http_status_1.default.UNAUTHORIZED).json({
            message: err.message
        });
    }
    else if (err instanceof errors_1.ConflictError) {
        return res.status(http_status_1.default.CONFLICT).json({
            message: err.message,
            field: err.field
        });
    }
    else if (err instanceof errors_1.InternalServerError) {
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({
            message: err.message || "Internal Server Error",
            error: err
        });
    }
    else {
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json(err.message || err);
    }
};
exports.errorHandler = errorHandler;
