import supabase from "../../database.js"

export const login = async (req, res) => {

  const { email, password } = req.body

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  // console.log( res.json(data) )
  // console.log(data)

  if (error) return res.json({ error: error.message })
  
  return res.json(data)

}
