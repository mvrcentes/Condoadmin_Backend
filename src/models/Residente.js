import Joi from 'joi'

const ResidentSchema = Joi.object({
    //num_casa, cui, nombre, telefono, correo, tipo_residente

    num_casa: Joi.number().integer().required(), 
    cui: Joi.string().required(),
    nombre: Joi.string().required(),
    telefono: Joi.string().required(),
    correo: Joi.string().required(),
    tipo_residente: Joi.string().required(),
})

export default ResidentSchema