import { Schema, model } from 'mongoose'
import { ITask } from '../types'

const taskSchema = new Schema<ITask>({
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
})

export const Task = model('Task', taskSchema)
