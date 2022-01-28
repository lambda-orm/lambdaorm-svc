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
const ping_1 = __importDefault(require("../controllers/ping"));
const expression_1 = __importDefault(require("../controllers/expression"));
const stage_1 = __importDefault(require("../controllers/stage"));
const schema_1 = __importDefault(require("../controllers/schema"));
const router = express_1.default.Router();
router.get('/ping', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new ping_1.default();
    const response = yield controller.getMessage();
    return res.send(response);
}));
router.get('/expression/:expression/metadata', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new expression_1.default();
    const response = yield controller.metadata(req.params.expression);
    return res.send(response);
}));
router.get('/expression/:expression/parameters', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new expression_1.default();
    const response = yield controller.parameters(req.params.expression);
    return res.send(response);
}));
router.get('/expression/:expression/model', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new expression_1.default();
    const response = yield controller.model(req.params.expression);
    return res.send(response);
}));
router.get('/expression/:expression/sentence', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new expression_1.default();
    const stage = req.query ? req.query.stage : undefined;
    const response = yield controller.sentence(req.params.expression, stage);
    return res.send(response);
}));
router.post('/expression/:expression/run', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new expression_1.default();
    const stage = req.query ? req.query.stage : undefined;
    const response = yield controller.run(req.params.expression, req.body, stage);
    return res.send(response);
}));
router.get('/stage/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new stage_1.default();
    const response = yield controller.list();
    return res.send(response);
}));
router.get('/stage/:stage/exists', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new stage_1.default();
    const response = yield controller.exists(req.params.stage);
    return res.send(response);
}));
router.get('/stage/:stage/export', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new stage_1.default();
    const response = yield controller.export(req.params.stage);
    return res.send(response);
}));
router.post('/stage/:stage/import', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new stage_1.default();
    const response = yield controller.import(req.params.stage, req.body);
    return res.send(response);
}));
router.get('/schema/entities', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new schema_1.default();
    const response = yield controller.entities();
    return res.send(response);
}));
router.get('/schema/enums', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new schema_1.default();
    const response = yield controller.enums();
    return res.send(response);
}));
router.get('/schema/dataSources', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new schema_1.default();
    const response = yield controller.dataSources();
    return res.send(response);
}));
router.get('/schema/mappings', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new schema_1.default();
    const response = yield controller.mappings();
    return res.send(response);
}));
router.get('/schema/stages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new schema_1.default();
    const response = yield controller.stages();
    return res.send(response);
}));
exports.default = router;
//# sourceMappingURL=index.js.map