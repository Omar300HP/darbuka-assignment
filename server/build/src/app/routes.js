"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const board_controller_1 = require("./../features/board/board.controller");
const authentication_1 = require("./../common/middlewares/authentication");
const expressAuthenticationRecasted = authentication_1.expressAuthentication;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "Task": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "title": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "status": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
            "updatedAt": { "dataType": "datetime", "required": true },
            "assigneeId": { "dataType": "string" },
            "assigneeName": { "dataType": "string" },
            "order": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Board": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "owner": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
            "updatedAt": { "dataType": "datetime", "required": true },
            "sharedWith": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
            "tasks": { "dataType": "array", "array": { "dataType": "refObject", "ref": "Task" } },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/v1/boards', ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController)), ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController.prototype.listBoards)), function BoardController_listBoards(request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new board_controller_1.BoardController();
            templateService.apiHandler({
                methodName: 'listBoards',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/boards', ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController)), ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController.prototype.createBoard)), function BoardController_createBoard(request, response, next) {
        const args = {
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new board_controller_1.BoardController();
            templateService.apiHandler({
                methodName: 'createBoard',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/v1/boards/:boardId', ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController)), ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController.prototype.getBoardById)), function BoardController_getBoardById(request, response, next) {
        const args = {
            boardId: { "in": "path", "name": "boardId", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new board_controller_1.BoardController();
            templateService.apiHandler({
                methodName: 'getBoardById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/v1/boards/:boardId', ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController)), ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController.prototype.updateBoard)), function BoardController_updateBoard(request, response, next) {
        const args = {
            boardId: { "in": "path", "name": "boardId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new board_controller_1.BoardController();
            templateService.apiHandler({
                methodName: 'updateBoard',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/v1/boards/:boardId', ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController)), ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController.prototype.deleteBoard)), function BoardController_deleteBoard(request, response, next) {
        const args = {
            boardId: { "in": "path", "name": "boardId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new board_controller_1.BoardController();
            templateService.apiHandler({
                methodName: 'deleteBoard',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/v1/boards/:boardId/tasks', ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController)), ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController.prototype.createTask)), function BoardController_createTask(request, response, next) {
        const args = {
            boardId: { "in": "path", "name": "boardId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new board_controller_1.BoardController();
            templateService.apiHandler({
                methodName: 'createTask',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/v1/boards/:boardId/tasks/:taskId', ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController)), ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController.prototype.getTask)), function BoardController_getTask(request, response, next) {
        const args = {
            boardId: { "in": "path", "name": "boardId", "required": true, "dataType": "string" },
            taskId: { "in": "path", "name": "taskId", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new board_controller_1.BoardController();
            templateService.apiHandler({
                methodName: 'getTask',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/v1/boards/:boardId/tasks/:taskId', ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController)), ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController.prototype.updateTask)), function BoardController_updateTask(request, response, next) {
        const args = {
            boardId: { "in": "path", "name": "boardId", "required": true, "dataType": "string" },
            taskId: { "in": "path", "name": "taskId", "required": true, "dataType": "string" },
            request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new board_controller_1.BoardController();
            templateService.apiHandler({
                methodName: 'updateTask',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/v1/boards/:boardId/tasks/:taskId', ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController)), ...((0, runtime_1.fetchMiddlewares)(board_controller_1.BoardController.prototype.deleteTask)), function BoardController_deleteTask(request, response, next) {
        const args = {
            boardId: { "in": "path", "name": "boardId", "required": true, "dataType": "string" },
            taskId: { "in": "path", "name": "taskId", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new board_controller_1.BoardController();
            templateService.apiHandler({
                methodName: 'deleteTask',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
