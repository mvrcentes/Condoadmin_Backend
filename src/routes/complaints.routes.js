import { Router } from "express"

import { getComplaints, getComplaintByID } from "../controllers/complaints.controllers.js"

const router = Router()

router.route("/").get(getComplaints)

router.route("/:id").get(getComplaintByID)

export default router
