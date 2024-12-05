import Joi from 'joi'

import { IJoiSchema } from '../../types'

export const getTasksValidationSchema: IJoiSchema = {
  query: Joi.object({
    page: Joi.number().optional(),
    limit: Joi.number().optional(),
    sortBy: Joi.string().optional(),
    sortOrder: Joi.string().optional(),
    completed: Joi.boolean().optional(),
  }),
}
