import { Router } from "express";
import { contact } from "../controllers/contact.controller.js";
import { index } from "../controllers/index.controller.js";
import {
  createInscription,
  deleteInscription,
  getInscriptionById,
  getInscriptions,
  updateInscription,
} from "../controllers/inscription.controller.js";
import { signUp } from "../controllers/user.controller.js";

const router = Router();

router.post("/api/signup", signUp);
router.get("/", index);
router.get("/api/contact", contact);
router.post("/api/create_inscription", createInscription);
router.get("/api/get_inscriptions", getInscriptions);
router.get("/api/get_inscription/:id", getInscriptionById);
router.put(
  "/api/update_inscription/:id",

  updateInscription
);
router.delete(
  "/api/delete_inscription/:id",

  deleteInscription
);

export default router;
