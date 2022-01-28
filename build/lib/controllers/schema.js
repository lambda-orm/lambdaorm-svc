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
let SchemaController = class SchemaController {
    entities() {
        return __awaiter(this, void 0, void 0, function* () {
            return lambdaorm_1.orm.schema.model.entities;
        });
    }
    enums() {
        return __awaiter(this, void 0, void 0, function* () {
            return lambdaorm_1.orm.schema.model.enums;
        });
    }
    dataSources() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            const sources = lambdaorm_1.orm.schema.dataSource.dataSources;
            for (const i in sources) {
                const source = sources[i];
                result.push({ name: source.name, dialect: source.dialect, mapping: source.mapping, connection: '***' });
            }
            return result;
        });
    }
    mappings() {
        return __awaiter(this, void 0, void 0, function* () {
            return lambdaorm_1.orm.schema.mapping.mappings;
        });
    }
    stages() {
        return __awaiter(this, void 0, void 0, function* () {
            return lambdaorm_1.orm.schema.stage.stages;
        });
    }
};
__decorate([
    (0, tsoa_1.Tags)('schema'),
    (0, tsoa_1.Get)('/entities'),
    (0, tsoa_1.SuccessResponse)('200', 'Ok'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchemaController.prototype, "entities", null);
__decorate([
    (0, tsoa_1.Tags)('schema'),
    (0, tsoa_1.Get)('/enums'),
    (0, tsoa_1.SuccessResponse)('200', 'Ok'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchemaController.prototype, "enums", null);
__decorate([
    (0, tsoa_1.Tags)('schema'),
    (0, tsoa_1.Get)('/datasources'),
    (0, tsoa_1.SuccessResponse)('200', 'Ok'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchemaController.prototype, "dataSources", null);
__decorate([
    (0, tsoa_1.Tags)('schema'),
    (0, tsoa_1.Get)('/mappings'),
    (0, tsoa_1.SuccessResponse)('200', 'Ok'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchemaController.prototype, "mappings", null);
__decorate([
    (0, tsoa_1.Tags)('schema'),
    (0, tsoa_1.Get)('/stages'),
    (0, tsoa_1.SuccessResponse)('200', 'Ok'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchemaController.prototype, "stages", null);
SchemaController = __decorate([
    (0, tsoa_1.Route)('schema')
], SchemaController);
exports.default = SchemaController;
//# sourceMappingURL=schema.js.map