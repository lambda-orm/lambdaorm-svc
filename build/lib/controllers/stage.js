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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsoa_1 = require("tsoa");
const lambdaorm_1 = require("lambdaorm");
let StageController = class StageController {
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return lambdaorm_1.orm.schema.stage.stages.map(p => p.name);
        });
    }
    exists(stage) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield lambdaorm_1.orm.stage.exists(stage);
        });
    }
    export(stage) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield lambdaorm_1.orm.stage.export(stage).execute();
        });
    }
    import(stage, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield lambdaorm_1.orm.stage.import(stage).execute(data);
        });
    }
};
__decorate([
    (0, tsoa_1.Tags)('stage'),
    (0, tsoa_1.Get)('/'),
    (0, tsoa_1.SuccessResponse)('200', 'Ok'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StageController.prototype, "list", null);
__decorate([
    (0, tsoa_1.Tags)('stage'),
    (0, tsoa_1.Get)('/{stage}/exists'),
    (0, tsoa_1.SuccessResponse)('200', 'Ok'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "exists", null);
__decorate([
    (0, tsoa_1.Tags)('stage'),
    (0, tsoa_1.Get)('/{stage}/export'),
    (0, tsoa_1.SuccessResponse)('200', 'Ok'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "export", null);
__decorate([
    (0, tsoa_1.Tags)('stage'),
    (0, tsoa_1.Post)('/{stage}/import'),
    (0, tsoa_1.SuccessResponse)('200', 'Ok'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "import", null);
StageController = __decorate([
    (0, tsoa_1.Route)('stage')
], StageController);
exports.default = StageController;
//# sourceMappingURL=stage.js.map