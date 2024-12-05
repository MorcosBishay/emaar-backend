import { Document } from 'mongoose'

export interface ITask extends Document {
  title: string
  description?: string
  completed: boolean
  created_at: Date
}
