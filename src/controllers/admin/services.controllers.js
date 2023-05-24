import supabase from '../../database.js'
import Equipment from '../../models/Equipment.js'
import Mantenimiento from '../../models/Mantenimiento.js'

export const getEquipment = async (req, res) => {
    const { data, error } = await supabase
        .from("equipo")
        .select()

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

export const getServiceByEquipmentID = async (req, res) => {
    const { id } = req.params

    const { data, error } = await supabase
        .from("mantenimiento_view")
        .select()
        .eq("id_equipo", id)

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

export const createEquipment = async (req, res) => {
    const { nombre, descripcion, estado, condominio } =
        req.body

    //Validacion de datos
    const { error, value } = Equipment.validate({
        nombre, descripcion, estado, condominio
    })

    if (error) {
        console.log(error.message)
        return res.json({ error: error.message })
    }

    try {
        // Insert the new user into the medico table
        const { data, error } = await supabase
            .from('equipo')
            .insert({
                nombre: nombre, 
                descripcion: descripcion, 
                estado: estado, 
                condominio: condominio
            });
            

        if (error) {
            console.error(error.message);
            return res.json({ error: error.message });
        }

        // Return a success message if the insert was successful
        console.log(data);
        res.json({ message: 'equipo creado' });
    } catch (error) {
        console.error(error.message);
        return res.json({ error: error.message });
    }
}

export const createService = async (req, res) => {
    const {  equipo, fecha, descripcion, estado, costo } =
        req.body

    //Validacion de datos
    const { error, value } = Mantenimiento.validate({
        equipo, fecha, descripcion, estado, costo
    })

    if (error) {
        console.log(error.message)
        return res.json({ error: error.message })
    }

    try {
        // Insert the new user into the medico table
        const { data, error } = await supabase
            .from('mantenimiento')
            .insert({
                equipo: equipo, 
                fecha: fecha,
                descripcion: descripcion, 
                estado: estado, 
                costo: costo
            });
            

        if (error) {
            console.error(error.message);
            return res.json({ error: error.message });
        }

        // Return a success message if the insert was successful
        console.log(data);
        res.json({ message: 'mantenimiento creado' });
    } catch (error) {
        console.error(error.message);
        return res.json({ error: error.message });
    }
}
