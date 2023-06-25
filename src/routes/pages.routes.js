import { Router } from "express";
import { contact } from "../controllers/contact.controller.js";
import { index } from "../controllers/index.controller.js";

const router = Router();

router.get("/", index);

router.get("/contact", contact);

export default router;
