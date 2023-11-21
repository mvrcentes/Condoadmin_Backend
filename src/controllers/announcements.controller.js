import supabase from '../database.js'

export const getAnnouncement = async (req, res) => {
  const { data, error } = await supabase
    .from("anuncio")
    .select()

  if (error) return res.json({ error: error.message })

  return res.json(data)
}

export const createAnnounce = async (req, res) => {
  const { titulo, contenido, fecha, autor, residente } = req.body

  try {
    // Insert the new user into the medico table
    const { data, error } = await supabase
      .from('anuncio')
      .insert({
        titulo: titulo,
        contenido: contenido,
        fecha_creacion: fecha,
        autor: autor,
        condominio: 2
      })
    
    if (error) {
      console.error(error.message);
      return res.json({ error: error.message });
    }

    // Return a success message if the insert was successful
    // console.log(data)
    // console.log('\nANUNCIO CREADO\n')
    res.json({ message: 'anuncio creado' })
  } catch (error) {
    console.error(error.message)
    return res.json({ error: error.message })
  }
}

export const getAnnouncementByID = async (req, res) => {
  const { id } = req.params

  const { data, error } = await supabase
    .from("anuncio")
    .select()
    .eq("id", id)

  if (error) return res.json({ error: error.message })

  return res.json(data)
}