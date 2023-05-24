import Joi from 'joi'

const HouseSchema = Joi.object({
    num_casa: Joi.number().integer().required(), 
    direccion: Joi.string().required(), 
    condominio: Joi.number().integer().required(), 
    cuota_mensual: Joi.number().integer().required(),
})

export default HouseSchema