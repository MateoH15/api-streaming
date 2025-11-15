import mongoose from "mongoose";
import StreamingPlataform from "../models/Platform.js";
import dotenv from "dotenv";

dotenv.config();

const seedData = [
  {
    basicID: "netflix",
    plataforma: "Netflix",
    logo: "URL-logo-Netflix",
    ultimaActualizacion: "Fecha-desconocida",
    planes: [
      {
        nombre: "Básico (Mensual)",
        precio: 4299,
        moneda: "ARS",
      },
      {
        nombre: "Estándar (Mensual)",
        precio: 7199,
        moneda: "ARS",
      },
      {
        nombre: "Premium (Mensual)",
        precio: 9699,
        moneda: "ARS",
      },
      {
        nombre: "Cuenta extra (Adicional)",
        precio: 1699,
        moneda: "ARS",
      },
    ],
  },
  {
    basicID: "max",
    plataforma: "Max",
    logo: "URL-logo-Max",
    ultimaActualizacion: "Fecha-desconocida",
    planes: [
      {
        nombre: "Básico (Mensual)",
        precio: 5690,
        moneda: "ARS",
      },
      {
        nombre: "Estándar (Mensual)",
        precio: 7290,
        moneda: "ARS",
      },
      {
        nombre: "Platino (Mensual)",
        precio: 8790,
        moneda: "ARS",
      },
      {
        nombre: "Básico (Anual)",
        precio: 49590,
        moneda: "ARS",
      },
      {
        nombre: "Estándar (Anual)",
        precio: 61290,
        moneda: "ARS",
      },
      {
        nombre: "Platino (Anual)",
        precio: 72890,
        moneda: "ARS",
      },
    ],
  },
  {
    basicID: "primevideo",
    plataforma: "Prime Video",
    logo: "URL-logo-Prime-Video",
    ultimaActualizacion: "Fecha-desconocida",
    planes: [
      {
        nombre: "Estándar (Mensual)",
        precio: 3999,
        moneda: "ARS",
      },
    ],
  },
  {
    basicID: "disneyplus",
    plataforma: "Disney+",
    logo: "URL-logo-Disney-Plus",
    ultimaActualizacion: "Fecha-desconocida",
    planes: [
      {
        nombre: "Estándar (Mensual)",
        precio: 10164,
        moneda: "ARS",
      },
      {
        nombre: "Premium (Mensual)",
        precio: 15206,
        moneda: "ARS",
      },
    ],
  },
  {
    basicID: "appletvplus",
    plataforma: "Apple TV+",
    logo: "URL-logo-Apple-TV-Plus",
    ultimaActualizacion: "Fecha-desconocida",
    planes: [
      {
        nombre: "Plan Único (Mensual)",
        precio: 6.99,
        moneda: "USD",
      },
    ],
  },
  {
    basicID: "spotify",
    plataforma: "Spotify",
    logo: "URL-logo-Spotify",
    ultimaActualizacion: "Fecha-desconocida",
    planes: [
      {
        nombre: "Individual (Mensual)",
        precio: 3299,
        moneda: "ARS",
      },
      {
        nombre: "Duo (Mensual)",
        precio: 4399,
        moneda: "ARS",
      },
      {
        nombre: "Familiar (Mensual)",
        precio: 5499,
        moneda: "ARS",
      },
      {
        nombre: "Estudiantes (Mensual)",
        precio: 1799,
        moneda: "ARS",
      },
      {
        nombre: "Individual (Prepago Eq. Mensual)",
        precio: 2749.17,
        moneda: "ARS",
      },
    ],
  },
  {
    basicID: "applemusic",
    plataforma: "Apple Music",
    logo: "URL-logo-Apple-Music",
    ultimaActualizacion: "Fecha-desconocida",
    planes: [
      {
        nombre: "Estudiante (Mensual)",
        precio: 1.99,
        moneda: "USD",
      },
      {
        nombre: "Individual (Mensual)",
        precio: 3.29,
        moneda: "USD",
      },
      {
        nombre: "Familiar (Mensual)",
        precio: 5.49,
        moneda: "USD",
      },
    ],
  },
  {
    basicID: "playstationplus",
    plataforma: "PlayStation Plus",
    logo: "URL-logo-PlayStation-Plus",
    ultimaActualizacion: "Fecha-desconocida",
    planes: [
      {
        nombre: "Essential (Mensual)",
        precio: 8,
        moneda: "USD",
      },
      {
        nombre: "Extra (Mensual)",
        precio: 12,
        moneda: "USD",
      },
      {
        nombre: "Deluxe (Mensual)",
        precio: 14,
        moneda: "USD",
      },
      {
        nombre: "Essential (Trimestral)",
        precio: 21,
        moneda: "USD",
      },
      {
        nombre: "Extra (Trimestral)",
        precio: 34,
        moneda: "USD",
      },
      {
        nombre: "Deluxe (Trimestral)",
        precio: 40,
        moneda: "USD",
      },
      {
        nombre: "Essential (Anual)",
        precio: 65,
        moneda: "USD",
      },
      {
        nombre: "Extra (Anual)",
        precio: 108,
        moneda: "USD",
      },
      {
        nombre: "Deluxe (Anual)",
        precio: 125,
        moneda: "USD",
      },
    ],
  },
  {
    basicID: "xboxgamepass",
    plataforma: "Xbox Game Pass",
    logo: "URL-logo-Xbox-Game-Pass",
    ultimaActualizacion: "Fecha-desconocida",
    planes: [
      {
        nombre: "Ultimate (Mensual)",
        precio: 10999,
        moneda: "ARS",
      },
      {
        nombre: "Standard (Mensual)",
        precio: 8999,
        moneda: "ARS",
      },
      {
        nombre: "PC Game Pass (Mensual)",
        precio: 6999,
        moneda: "ARS",
      },
      {
        nombre: "Core (Mensual)",
        precio: 5999,
        moneda: "ARS",
      },
    ],
  },
  {
    basicID: "youtubemusic",
    plataforma: "Youtube Music",
    logo: "URL-logo-Youtube-Music",
    ultimaActualizacion: "Fecha-desconocida",
    planes: [
      {
        nombre: "Estándar (Mensual)",
        precio: 3399,
        moneda: "ARS",
      },
      {
        nombre: "Familiar (Mensual)",
        precio: 6799,
        moneda: "ARS",
      },
    ],
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await StreamingPlataform.deleteMany({});
    await StreamingPlataform.insertMany(seedData);

    console.log("Data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seed();
