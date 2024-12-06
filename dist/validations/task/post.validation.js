"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTaskValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postTaskValidationSchema = {
    body: joi_1.default.object({
        title: joi_1.default.string().min(3).required().messages({
            'string.empty': 'Title is required',
            'string.min': 'Title must be at least 3 characters long',
        }),
        description: joi_1.default.string().optional().allow(''),
        completed: joi_1.default.boolean().optional(),
    }),
};
//# sourceMappingURL=post.validation.js.map