import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import router from "./routes/platform.routes.js";

const app = express();

// Configuración de seguridad con Helmet
app.use(helmet());

// Configuración de CORS con orígenes específicos
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [
  "http://localhost:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Permitir peticiones sin origin (como Postman, curl, etc.)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Rate Limiting - Protección contra ataques de fuerza bruta
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutos por defecto
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // límite de peticiones
  message: {
    error:
      "Demasiadas peticiones desde esta IP, por favor intenta de nuevo más tarde",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Aplicar rate limiting a todas las rutas de la API
app.use("/api/", limiter);

app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
  res.send("API funcionando");
});

export default app;
