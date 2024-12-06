"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putTaskValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.putTaskValidationSchema = {
    body: joi_1.default.object({
        title: joi_1.default.string().optional(),
        description: joi_1.default.string().optional().allow(''),
        completed: joi_1.default.boolean().optional(),
    }),
    params: joi_1.default.object({
        id: joi_1.default.string().required().messages({
            'string.empty': 'Id is required',
        }),
    }),
};
//# sourceMappingURL=put.validation.js.map