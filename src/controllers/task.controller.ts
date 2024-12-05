import { Request, Response } from 'express'
import { Task } from '../models'

export const getTasks = async (req: Request, res: Response) => {
  const {
    page = 1,
    limit = 10,
    sortBy = 'created_at',
    sortOrder = 'desc',
    completed,
  } = req.query

  try {
    const pageNum = parseInt(page as string, 10)
    const limitNum = parseInt(limit as string, 10)
    const sortOptions: { [key: string]: 1 | -1 } = {
      [sortBy as string]: sortOrder === 'asc' ? 1 : -1,
    }

    const filter: { [key: string]: any } = {}
    if (completed !== undefined) {
      filter.completed = completed === 'true'
    }

    const tasks = await Task.find(filter)
      .collation({ locale: 'en', strength: 2 }) // Ignore case in sorting
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum)
      .sort(sortOptions)

    const totalTasks = await Task.countDocuments(filter)

    res.status(200).json({
      tasks,
      totalTasks,
      totalPages: Math.ceil(totalTasks / limitNum),
      currentPage: pageNum,
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' })
  }
}

export const createTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { title, description } = req.body as {
      title: string
      description?: string
    }

    const task = new Task({ title, description })
    const savedTask = await task.save()

    res.status(201).json(savedTask)
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' })
  }
}
export const updateTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params

    const { completed, title, description } = req.body as {
      completed?: boolean
      title?: string
      description?: string
    }

    const task = await Task.findById(id)

    if (!task) {
      res.status(404).json({ error: 'Task not found' })
      return
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        completed: completed !== undefined ? completed : task.completed,
        title: title || task.title,
        description: description || task.description || '',
      },
      { new: true, runValidators: true },
    )

    if (!updatedTask) {
      res.status(404).json({ error: 'Task not found' })
      return
    }

    res.status(200).json(updatedTask)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' })
  }
}

export const deleteTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params

    const deletedTask = await Task.findByIdAndDelete(id)

    if (!deletedTask) {
      res.status(404).json({ error: 'Task not found' })
      return
    }

    res.status(200).send({
      success: true,
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' })
  }
}
