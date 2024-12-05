import express from 'express'
import { getTasks, createTask, updateTask, deleteTask } from '../controllers'
import { validate } from '../middleware'
import {
  getTasksValidationSchema,
  postTaskValidationSchema,
  putTaskValidationSchema,
  deleteTaskValidationSchema,
} from '../validations'

const router = express.Router()

router.get('/tasks', validate(getTasksValidationSchema), getTasks)
router.post('/tasks', validate(postTaskValidationSchema), createTask)
router.put('/tasks/:id', validate(putTaskValidationSchema), updateTask)
router.delete('/tasks/:id', validate(deleteTaskValidationSchema), deleteTask)

export { router }
