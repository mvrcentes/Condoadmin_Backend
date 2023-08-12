import supabase from '../database.js'
import Complaint from '../models/Complaint.js'

export const getComplaints = async (req, res) => {
  const { data, error } = await supabase
    .from("quejas")
    .select()

  if (error) return res.json({ error: error.message })

  return res.json(data)
}

export const getComplaintByID = async (req, res) => {
  const { id } = req.params

  const { data, error } = await supabase
    .from("quejas")
    .select()
    .eq("id", id)

  if (error) return res.json({ error: error.message })

  return res.json(data)
}

export const createComplaint = async (req, res) => {
  const { titulo,
    contenido,
    fecha,
    autor,
    residente, } =
    req.body

  //Validacion de datos
  const { error, value } = Complaint.validate({
    titulo,
    contenido,
    fecha,
    autor,
    residente,
  })

  if (error) {
    console.log(error.message)
    return res.json({ error: error.message })
  }

  try {
    // Insert the new user into the medico table
    const { data, error } = await supabase
      .from('quejas')
      .insert({
        titulo: titulo,
        contenido: contenido,
        fecha: fecha,
        autor: autor,
        residente: residente,
        upvotes: 0,
        downvotes: 0,
      });


    if (error) {
      console.error(error.message);
      return res.json({ error: error.message });
    }

    // Return a success message if the insert was successful
    console.log(data);
    res.json({ message: 'Complaint creado' });
  } catch (error) {
    console.error(error.message);
    return res.json({ error: error.message });
  }
}