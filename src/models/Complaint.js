import Joi from 'joi'

const ComplaintSchema = Joi.object({
  titulo: Joi.string().required(),
  contenido: Joi.string().required(),
  fecha: Joi.date().required(),
  autor: Joi.string().required(),
  residente: Joi.string().required(),
})

export default ComplaintSchema
