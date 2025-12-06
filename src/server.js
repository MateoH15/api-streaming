import dotenv from "dotenv";
dotenv.config();

// Validar variables de entorno requeridas
const requiredEnvVars = ["MONGODB_URI"];
const missingEnvVars = requiredEnvVars.filter(
  (varName) => !process.env[varName]
);

if (missingEnvVars.length > 0) {
  console.error(
    `❌ Error: Faltan variables de entorno requeridas: ${missingEnvVars.join(
      ", "
    )}`
  );
  console.error("Por favor, configura estas variables en tu archivo .env");
  process.exit(1);
}

import express from "express";
import connectDB from "./config/db.js";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
