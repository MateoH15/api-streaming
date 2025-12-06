import express from "express";
import {
  getPlataforms,
  getPlataforma,
} from "../controllers/platform.controller.js";
import { validatePlataformaParam } from "../middleware/validation.js";

const router = express.Router();

router.get("/api/plataformas", getPlataforms);
router.get(
  "/api/plataformas/:plataforma",
  validatePlataformaParam,
  getPlataforma
);

export default router;
