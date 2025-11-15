import express from "express";
import {
  getPlataforms,
  getPlataforma,
} from "../controllers/platform.controller.js";

const router = express.Router();

router.get("/plataformas", getPlataforms);
router.get("/plataformas/:plataforma", getPlataforma);

export default router;
