"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const validations_1 = require("../validations");
const router = express_1.default.Router();
exports.router = router;
router.get('/tasks', (0, middleware_1.validate)(validations_1.getTasksValidationSchema), controllers_1.getTasks);
router.post('/tasks', (0, middleware_1.validate)(validations_1.postTaskValidationSchema), controllers_1.createTask);
router.put('/tasks/:id', (0, middleware_1.validate)(validations_1.putTaskValidationSchema), controllers_1.updateTask);
router.delete('/tasks/:id', (0, middleware_1.validate)(validations_1.deleteTaskValidationSchema), controllers_1.deleteTask);
//# sourceMappingURL=task.routes.js.map