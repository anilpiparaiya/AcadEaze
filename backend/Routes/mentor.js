import express from "express";
import {
  updateMentor,
  deleteMentor,
  getAllMentor,
  getSingleMentor,
} from "../Controllers/mentorController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", getSingleMentor);
router.get("/", getAllMentor);
router.put("/:id", authenticate, restrict(["mentor"]), updateMentor);
router.delete("/:id", authenticate, restrict(["mentor"]), deleteMentor);

export default router;
