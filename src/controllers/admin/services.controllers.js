import supabase from '../../database.js'

export const getServices = async (req, res) => {
    const { data, error } = await supabase
        .from("equipo")
        .select()

    if (error) return res.json({ error: error.message })

    return res.json(data)
}