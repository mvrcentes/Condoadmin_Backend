import { Router } from "express"

import { getComplaints, getComplaintByID, createComplaint } from "../controllers/complaints.controllers.js"

const router = Router()

router.route("/")
    .get(getComplaints)
    .post(createComplaint)

router.route("/:id").get(getComplaintByID)

export default router
