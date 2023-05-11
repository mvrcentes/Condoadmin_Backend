import  { createClient }  from '@supabase/supabase-js'

import dotenv from 'dotenv'
dotenv.config({ path: './.env.local' })

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY)

console.log(supabase)

export default supabase