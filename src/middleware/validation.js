import { param, validationResult } from "express-validator";

/**
 * Middleware para validar el parámetro de plataforma
 */
export const validatePlataformaParam = [
  param("plataforma")
    .trim()
    .notEmpty()
    .withMessage("El parámetro plataforma es requerido")
    .isLength({ min: 1, max: 50 })
    .withMessage(
      "El nombre de la plataforma debe tener entre 1 y 50 caracteres"
    )
    .matches(/^[a-zA-Z0-9-_]+$/)
    .withMessage(
      "El nombre de la plataforma solo puede contener letras, números, guiones y guiones bajos"
    ),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: "Datos inválidos",
        details: errors.array(),
      });
    }
    next();
  },
];
