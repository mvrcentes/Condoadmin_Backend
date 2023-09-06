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
  const { num_casa, cui, nombre, telefono, correo, tipo_residente, conteo_residentes, admin } =
    req.body

  const currentDate = new Date();
  const year = currentDate.getFullYear();

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
    const { data_residente, error_residente } = await supabase
      .from('residente')
      .insert({
        casa: num_casa,
        cui: cui,
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        tipo_residente: tipo_residente
      });

    const { data_usuario, error_usuario } = await supabase
      .from('usuario')
      .insert({
        username: `${nombre.substring(0, 3).toLowerCase()}${year.toString().substring(2)}0${num_casa}${conteo_residentes + 1}`,
        password: "condoadmin",
        rol: "residente",
        residente: cui,
      });

    let administrador = false;
    
    if(admin.toLowerCase()=="si"){
      administrador = true;
    }

    const { data_createUserSupabase, error_createUserSupabase } = await supabase.auth.signUp(
      {
        email: correo,
        password: "condoadmin",
        options: {
          data: {
            username: `${nombre.substring(0, 3).toLowerCase()}${year.toString().substring(2)}0${num_casa}${conteo_residentes + 1}`,
            admin: administrador,
            cui: cui,
            num_casa: num_casa,
          }
        }
      }
    )

    if (error) {
      console.error(error.message);
      return res.json({ error: error.message });
    }

    // Return a success message if the insert was successful
    console.log(`DATA1 ->${data_residente}`);
    console.log(`DATA2 ->${data_usuario}`);
    console.log(`DATA3 ->${data_createUserSupabase}`);
    res.json({ message: 'Residente creado' });
  } catch (error) {
    console.error(error.message);
    return res.json({ error: error.message });
  }
}
