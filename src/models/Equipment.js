import Joi from 'joi'

const EquipmentSchema = Joi.object({
    nombre: Joi.string().required(),
    descripcion: Joi.string().required(),
    estado: Joi.string().required(),
    condominio: Joi.number().integer().required(),
})

export default EquipmentSchema
