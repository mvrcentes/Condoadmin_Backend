import { Router } from "express"

import { createEquipment, createService, getEquipment, getServiceByEquipmentID } from "../controllers/admin/services.controllers.js"

const router = Router()

router.route("/")
    .get(getEquipment)
    .post(createEquipment)

router.route("/:id")
    .get(getServiceByEquipmentID)
    .post(createService)

export default router
