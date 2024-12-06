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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const models_1 = require("../models");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, limit = 10, sortBy = 'created_at', sortOrder = 'desc', completed, } = req.query;
    try {
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const sortOptions = {
            [sortBy]: sortOrder === 'asc' ? 1 : -1,
        };
        const filter = {};
        if (completed !== undefined) {
            filter.completed = completed === 'true';
        }
        const tasks = yield models_1.Task.find(filter)
            .collation({ locale: 'en', strength: 2 }) // Ignore case in sorting
            .skip((pageNum - 1) * limitNum)
            .limit(limitNum)
            .sort(sortOptions);
        const totalTasks = yield models_1.Task.countDocuments(filter);
        res.status(200).json({
            tasks,
            totalTasks,
            totalPages: Math.ceil(totalTasks / limitNum),
            currentPage: pageNum,
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});
exports.getTasks = getTasks;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const task = new models_1.Task({ title, description });
        const savedTask = yield task.save();
        res.status(201).json(savedTask);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to create task' });
    }
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { completed, title, description } = req.body;
        const task = yield models_1.Task.findById(id);
        if (!task) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        const updatedTask = yield models_1.Task.findByIdAndUpdate(id, {
            completed: completed !== undefined ? completed : task.completed,
            title: title || task.title,
            description: description || task.description || '',
        }, { new: true, runValidators: true });
        if (!updatedTask) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.status(200).json(updatedTask);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedTask = yield models_1.Task.findByIdAndDelete(id);
        if (!deletedTask) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.status(200).send({
            success: true,
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
});
exports.deleteTask = deleteTask;
//# sourceMappingURL=task.controller.js.map