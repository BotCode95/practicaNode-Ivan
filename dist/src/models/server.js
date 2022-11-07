"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const prueba_1 = __importDefault(require("../routes/prueba"));
class Server {
    // middleware
    constructor() {
        this.app = (0, express_1.default)();
        this.port = '4000';
        this.route = '/api/prueba';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.route, prueba_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`El servidor esta corriendo en el puerto ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map