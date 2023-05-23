import supabase from '../../database.js'
import House from '../../models/House.js'
import Residente from '../../models/Residente.js'

export const getHouses = async (req, res) => {
    const { data, error } = await supabase
        .from("casa")
        .select()

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

export const getResidentsByHouseID = async (req, res) => {
    const { id } = req.params

    const { data, error } = await supabase
        .from("residente_view")
        .select()
        .eq("num_casa", id)

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

export const createHouse = async (req, res) => {
    const { num_casa, direccion, condominio, cuota_mensual } =
        req.body

    //Validacion de datos
    const { error, value } = House.validate({
        num_casa, 
        direccion, 
        condominio, 
        cuota_mensual
    })

    if (error) {
        console.log(error.message)
        return res.json({ error: error.message })
    }

    try {
        // Insert the new user into the medico table
        const { data, error } = await supabase
            .from('casa')
            .insert({
                num_casa: num_casa, 
                direccion: direccion, 
                condominio: condominio,
                cuota_mensual: cuota_mensual,
            });
            

        if (error) {
            console.error(error.message);
            return res.json({ error: error.message });
        }

        // Return a success message if the insert was successful
        console.log(data);
        res.json({ message: 'Casa creado' });
    } catch (error) {
        console.error(error.message);
        return res.json({ error: error.message });
    }
}

export const createResident = async (req, res) => {
    const { num_casa, cui, nombre, telefono, correo, tipo_residente } =
        req.body

    //Validacion de datos
    const { error, value } = Residente.validate({
        num_casa, cui, nombre, telefono, correo, tipo_residente
    })

    if (error) {
        console.log(error.message)
        return res.json({ error: error.message })
    }

    try {
        // Insert the new user into the medico table
        const { data, error } = await supabase
            .from('residente')
            .insert({
                casa:           num_casa,
                cui:            cui,
                nombre:         nombre,
                telefono:       telefono,
                correo:         correo,
                tipo_residente: tipo_residente
            });
            

        if (error) {
            console.error(error.message);
            return res.json({ error: error.message });
        }

        // Return a success message if the insert was successful
        console.log(data);
        res.json({ message: 'Residente creado' });
    } catch (error) {
        console.error(error.message);
        return res.json({ error: error.message });
    }
}