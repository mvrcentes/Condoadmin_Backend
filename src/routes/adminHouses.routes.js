import { Router } from "express"

import { getHouses, getHouseByID } from "../controllers/admin/adminHouses.controllers.js"

const router = Router()

router.route("/").get(getHouses)

router.route("/:id").get(getHouseByID)

export default router
