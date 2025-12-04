import Platform from "../models/Platform.js";

export const getPlataforms = async (req, res) => {
  try {
    const plataformas = await Platform.find().select(
      "-_id -__v -planes._id -basicID"
    );
    res.json(plataformas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las plataformas" });
  }
};

export const getPlataforma = async (req, res) => {
  const { plataforma } = req.params;
  try {
    const plataformaData = await Platform.findOne({
      basicID: plataforma,
    }).select("-_id -__v -planes._id -basicID");

    if (!plataformaData) {
      return res.status(404).json({ error: "Plataforma no encontrada" });
    }

    return res.json(plataformaData);
  } catch (error) {
    console.error("Error en getPlataforma:", error);
    return res.status(500).json({ error: "Error al obtener la plataforma" });
  }
};
