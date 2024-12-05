import Joi from 'joi'

import { IJoiSchema } from '../../types'

export const putTaskValidationSchema: IJoiSchema = {
  body: Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().optional().allow(''),
    completed: Joi.boolean().optional(),
  }),
  params: Joi.object({
    id: Joi.string().required().messages({
      'string.empty': 'Id is required',
    }),
  }),
}
