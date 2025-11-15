import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  moneda: {
    type: String,
  },
});

const platformSchema = new mongoose.Schema({
  basicID: {
    type: String,
    required: true,
  },
  plataforma: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  ultimaActualizacion: {
    type: String,
    required: true,
  },

  planes: [planSchema],
});

export default mongoose.model("StreamingPlatform", platformSchema);
