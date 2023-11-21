import { Router } from "express"

import { getAnnouncement, getAnnouncementByID, createAnnounce} from "../controllers/announcements.controller.js"

const router = Router()

router.route("/")
  .get(getAnnouncement)
  .post(createAnnounce)

router.route("/:id").get(getAnnouncementByID)

export default router
