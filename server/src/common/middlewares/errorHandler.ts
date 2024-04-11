import { Response as ExResponse, Request as ExRequest, NextFunction } from "express";
import httpStatus from "http-status";
import { ValidateError } from "tsoa";

import {
	BadRequestError,
	UnauthorizedError,
	InternalServerError,
	NotFoundError,
	ForbiddenError,
	ConflictError
} from "../errors";

export const errorHandler = (
	err: Error,
	req: ExRequest,
	res: ExResponse,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next?: NextFunction
): ExResponse | void => {
	if (err instanceof ValidateError) {
		return res.status(httpStatus.BAD_REQUEST).json({
			message: "Validation Failed",
			details: err.fields
		});
	} else if (err instanceof BadRequestError) {
		return res.status(httpStatus.BAD_REQUEST).json({
			message: err.message,
			details: err.details
		});
	} else if (err instanceof NotFoundError) {
		return res.status(httpStatus.NOT_FOUND).json({
			message: err.message
		});
	} else if (err instanceof ForbiddenError) {
		return res.status(httpStatus.FORBIDDEN).json({
			message: err.message
		});
	} else if (err instanceof UnauthorizedError) {
		return res.status(httpStatus.UNAUTHORIZED).json({
			message: err.message
		});
	} else if (err instanceof ConflictError) {
		return res.status(httpStatus.CONFLICT).json({
			message: err.message,
			field: err.field
		});
	} else if (err instanceof InternalServerError) {
		return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
			message: err.message || "Internal Server Error",
			error: err
		});
	} else {
		return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err.message || err);
	}
};
