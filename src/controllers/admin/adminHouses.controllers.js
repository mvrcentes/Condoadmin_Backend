import supabase from '../../database.js'

export const getHouses = async (req, res) => {
    const { data, error } = await supabase
        .from("casa")
        .select()

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

export const getHouseByID = async (req, res) => {
    const { id } = req.params

    const { data, error } = await supabase
        .from("residente_view")
        .select()
        .eq("num_casa", id)

    if (error) return res.json({ error: error.message })

    return res.json(data)
}