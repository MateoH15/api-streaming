import express from "express";
import {
  getPlataforms,
  getPlataforma,
} from "../controllers/platform.controller.js";

const router = express.Router();

router.get("/api/plataformas", getPlataforms);
router.get("/api/plataformas/:plataforma", getPlataforma);

export default router;
