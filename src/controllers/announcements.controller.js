import supabase from '../database.js'

export const getAnnouncement = async (req, res) => {
    const { data, error } = await supabase
        .from("anuncio")
        .select()

    if (error) return res.json({ error: error.message })

    return res.json(data)
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