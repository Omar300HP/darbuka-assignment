"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardController = void 0;
const tsoa_1 = require("tsoa");
const board_service_1 = __importDefault(require("./board.service"));
const board_1 = __importDefault(require("../../DAL/board"));
let BoardController = class BoardController extends tsoa_1.Controller {
    boardService;
    constructor() {
        super();
        this.boardService = new board_service_1.default(new board_1.default());
    }
    async listBoards(request) {
        return await this.boardService.getBoardsByOwner(request.user.id || '');
    }
    async createBoard(request) {
        const newBoard = request.body;
        return await this.boardService.createBoard(newBoard);
    }
    async getBoardById(boardId) {
        return await this.boardService.getBoardById(boardId);
    }
    async updateBoard(boardId, request) {
        return await this.boardService.updateBoard(boardId, request.body);
    }
    async deleteBoard(boardId, request) {
        await this.boardService.deleteBoard(boardId);
        return await this.boardService.getBoardsByOwner(request.user.id || '');
    }
    async createTask(boardId, request) {
        const newTask = request.body;
        return await this.boardService.createTask(boardId, newTask);
    }
    async getTask(boardId, taskId) {
        return await this.boardService.getTask(boardId, taskId);
    }
    async updateTask(boardId, taskId, request) {
        return await this.boardService.updateTask(boardId, taskId, request.body);
    }
    async deleteTask(boardId, taskId) {
        await this.boardService.deleteTask(boardId, taskId);
        return await this.boardService.getBoardById(boardId);
    }
};
exports.BoardController = BoardController;
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "listBoards", null);
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "createBoard", null);
__decorate([
    (0, tsoa_1.Get)('/{boardId}'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getBoardById", null);
__decorate([
    (0, tsoa_1.Put)('/{boardId}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "updateBoard", null);
__decorate([
    (0, tsoa_1.Delete)('/{boardId}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "deleteBoard", null);
__decorate([
    (0, tsoa_1.Post)('/{boardId}/tasks'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "createTask", null);
__decorate([
    (0, tsoa_1.Get)('/{boardId}/tasks/{taskId}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getTask", null);
__decorate([
    (0, tsoa_1.Put)('/{boardId}/tasks/{taskId}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Path)()),
    __param(2, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "updateTask", null);
__decorate([
    (0, tsoa_1.Delete)('/{boardId}/tasks/{taskId}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "deleteTask", null);
exports.BoardController = BoardController = __decorate([
    (0, tsoa_1.Route)('/v1/boards')
    // @Security("jwt_auth")
    // @Response("401", "JWT token is missing or invalid")
    ,
    __metadata("design:paramtypes", [])
], BoardController);
