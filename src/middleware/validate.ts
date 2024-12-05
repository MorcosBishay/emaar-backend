import { Request, Response, NextFunction } from 'express'
import { IJoiSchema } from '../types'

export const validate =
  (schema: IJoiSchema) => (req: Request, res: Response, next: NextFunction) => {
    if (schema.body) {
      const { error } = schema.body.validate(req.body, { abortEarly: false })
      if (error) {
        res.status(400).json({ error: error.details.map((e) => e.message) })
        return
      }
    }

    if (schema.params) {
      const { error } = schema.params.validate(req.params, {
        abortEarly: false,
      })
      if (error) {
        res.status(400).json({ error: error.details.map((e) => e.message) })
        return
      }
    }

    if (schema.query) {
      const { error } = schema.query.validate(req.query, { abortEarly: false })
      if (error) {
        res.status(400).json({ error: error.details.map((e) => e.message) })
        return
      }
    }

    return next()
  }
