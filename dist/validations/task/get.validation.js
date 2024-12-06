"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.getTasksValidationSchema = {
    query: joi_1.default.object({
        page: joi_1.default.number().optional(),
        limit: joi_1.default.number().optional(),
        sortBy: joi_1.default.string().optional(),
        sortOrder: joi_1.default.string().optional(),
        completed: joi_1.default.boolean().optional(),
    }),
};
//# sourceMappingURL=get.validation.js.map