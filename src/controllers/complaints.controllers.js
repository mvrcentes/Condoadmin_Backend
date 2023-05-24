import supabase from '../database.js'

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