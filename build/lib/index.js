"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = __importDefault(require("./routes"));
const lambdaorm_1 = require("lambdaorm");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('tiny'));
app.use(express_1.default.static('public'));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const host = process.env.HOST || 'http://localhost';
        const port = process.env.PORT || '8000';
        const workspace = process.env.WORKSPACE || './workspace';
        yield lambdaorm_1.orm.init(workspace);
        app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
            swaggerOptions: {
                url: '/swagger.json'
            }
        }));
        app.use(routes_1.default);
        app.listen(port);
        console.log('Server running at: ' + host + ':' + port + '/docs');
        process.exitCode = 0;
        return 0;
    }
    catch (error) {
        yield lambdaorm_1.orm.end();
        console.error(error);
        process.exitCode = -1;
        return -1;
    }
});
start();
//# sourceMappingURL=index.js.map