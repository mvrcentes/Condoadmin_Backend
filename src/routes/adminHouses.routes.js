import { Router } from "express"

import { getHouses, getResidentsByHouseID, createHouse, createResident } from "../controllers/admin/adminHouses.controllers.js"

const router = Router()

router.route("/")
    .get(getHouses)
    .post(createHouse)


router.route("/:id")
    .get(getResidentsByHouseID)
    .post(createResident)

export default router
