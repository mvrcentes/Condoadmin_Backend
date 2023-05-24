// id_equipo, id, fecha, descripcion, estado, costo

import Joi from 'joi'

const MantenimientoSchema = Joi.object({
    equipo: Joi.number().integer().required(),
    fecha: Joi.date().required(),
    descripcion: Joi.string().required(),
    estado: Joi.string().required(),
    costo: Joi.number().integer().required(),
})

export default MantenimientoSchema