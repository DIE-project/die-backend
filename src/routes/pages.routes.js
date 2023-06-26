import { Router } from "express";

//index
import { contact } from "../controllers/contact.controller.js";
import { index } from "../controllers/index.controller.js";

//inscriptions
import {
  createInscription,
  deleteInscription,
  getInscriptionById,
  getInscriptions,
  updateInscription,
} from "../controllers/inscription.controller.js";
import { signUp } from "../controllers/user.controller.js";

//Meets
import {
  createMeet,
  deleteMeet,
  getMeetById,
  getMeets,
  getMeetsByEmprendedor,
  updateMeet,
} from "../controllers/meet.controller.js";

//Emprendedores
import {
  createEmprendedor,
  deleteEmprendedor,
  getEmprendedorById,
  getEmprendedores,
  updateEmprendedor,
} from "../controllers/emprendedor.controller.js";

const router = Router();

//index
router.get("/", index);
router.get("/api/contact", contact);
router.post("/api/signup", signUp);

//inscriptions
router.post("/api/create_inscription", createInscription);
router.get("/api/get_inscriptions", getInscriptions);
router.get("/api/get_inscription/:id", getInscriptionById);
router.put("/api/update_inscription/:id", updateInscription);
router.delete("/api/delete_inscription/:id", deleteInscription);

//Meets
router.post("/api/create_meet", createMeet);
router.get("/api/get_meets", getMeets);
router.get("/api/get_meet/:id", getMeetById);
router.put("/api/update_meet/:id", updateMeet);
router.delete("/api/delete_meet/:id", deleteMeet);
router.get("/api/get_meets_by_emprendedor/:id", getMeetsByEmprendedor);

//Emprendedores
router.post("/api/create_emprendedor", createEmprendedor);
router.get("/api/get_emprendedores", getEmprendedores);
router.get("/api/get_emprendedor/:id", getEmprendedorById);
router.put("/api/update_emprendedor/:id", updateEmprendedor);
router.delete("/api/delete_emprendedor/:id", deleteEmprendedor);

export default router;
