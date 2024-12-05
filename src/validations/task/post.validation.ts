import Joi from 'joi'

import { IJoiSchema } from '../../types'

export const postTaskValidationSchema: IJoiSchema = {
  body: Joi.object({
    title: Joi.string().min(3).required().messages({
      'string.empty': 'Title is required',
      'string.min': 'Title must be at least 3 characters long',
    }),
    description: Joi.string().optional().allow(''),
    completed: Joi.boolean().optional(),
  }),
}
