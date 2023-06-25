import { Router } from "express";
import { contact } from "../controllers/contact.controller.js";
import { index } from "../controllers/index.controller.js";
import {
  createInscripcion,
  deleteInscripcion,
  getInscripcionById,
  getInscripciones,
  updateInscripcion,
} from "../controllers/inscription.controller.js";

const router = Router();

router.get("/", index);

router.get("/contact", contact);

router.post("/createinscription", createInscripcion);

router.get("/getinscriptions", getInscripciones);

router.get("/getinscription/:id", getInscripcionById);

router.put("/updateinscription/:id", updateInscripcion);

router.delete("/deleteinscription/:id", deleteInscripcion);

export default router;
