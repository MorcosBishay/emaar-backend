import Joi from 'joi'

import { IJoiSchema } from '../../types'

export const deleteTaskValidationSchema: IJoiSchema = {
  params: Joi.object({
    id: Joi.string().required().messages({
      'string.empty': 'Id is required',
    }),
  }),
}
