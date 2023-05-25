import { Router } from "express"

import { getAnnouncement, getAnnouncementByID } from "../controllers/announcements.controller.js"

const router = Router()

router.route("/").get(getAnnouncement)

router.route("/:id").get(getAnnouncementByID)

export default router
