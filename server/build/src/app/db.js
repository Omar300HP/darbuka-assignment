"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let connected = false;
const connect = async () => {
    try {
        if (connected)
            return;
        console.log('Connecting to mongoDB...', process.env.DATABASE_URL);
        if (!process.env.DATABASE_URL) {
            throw new Error();
        }
        const con = await mongoose_1.default.connect(process.env.DATABASE_URL);
        // mongoose.set('debug', (process.env.NODE_ENV || "").toLowerCase() !== 'production');
        connected = true;
        console.log('Connected to mongoDB!');
        return con;
    }
    catch (err) {
        console.error("Can't connect to mongoDB", err);
        throw err;
    }
};
exports.default = connect;
