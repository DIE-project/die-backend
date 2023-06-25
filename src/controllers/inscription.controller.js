import Inscipcion from "../models/Inscription.js";

const Inscripcion = Inscipcion;

// Controlador para crear una nueva inscripción
export const createInscripcion = async (req, res) => {
  try {
    const { nombre, apellido, email, telefono, empresa, cargo, mensaje } =
      req.body;

    // Crear la inscripción en la base de datos
    const inscripcion = await Inscripcion.create({
      nombre,
      apellido,
      email,
      telefono,
      empresa,
      cargo,
      mensaje,
    });

    return res.status(201).json({ success: true, data: inscripcion });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al crear la inscripción" });
  }
};
