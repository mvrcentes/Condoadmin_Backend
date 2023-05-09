import  { createClient }  from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config({ path: './.env.local' })
import cors from 'cors'

import express from 'express'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY)

export default supabase

