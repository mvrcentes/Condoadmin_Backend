import { Router } from "express"

import { getServices } from "../controllers/admin/services.controllers.js"

const router = Router()

router.route("/").get(getServices)



export default router
