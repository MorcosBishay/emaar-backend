"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true, index: true },
    description: {
        type: String,
        required: false,
        trim: true,
        index: true,
        default: '',
    },
    completed: { type: Boolean, default: false, index: true },
    created_at: { type: Date, default: Date.now, index: true },
});
exports.Task = (0, mongoose_1.model)('Task', taskSchema);
//# sourceMappingURL=task.model.js.map