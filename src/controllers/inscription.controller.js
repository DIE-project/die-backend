import Inscripcion from "../models/Inscription.js";

export const createInscripcion = async (req, res) => {
  try {
    const { nombre, apellido, email, telefono, empresa, cargo, mensaje } =
      req.body;

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

export const getInscripciones = async (req, res) => {
  try {
    const inscripciones = await Inscripcion.findAll();

    return res.status(200).json({ success: true, data: inscripciones });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al obtener las inscripciones" });
  }
};

export const getInscripcionById = async (req, res) => {
  try {
    const { id } = req.params;

    const inscripcion = await Inscripcion.findOne({
      where: {
        id,
      },
    });

    if (!inscripcion) {
      return res
        .status(404)
        .json({ success: false, error: "Inscripción no encontrada" });
    }

    return res.status(200).json({ success: true, data: inscripcion });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al obtener la inscripción" });
  }
};

export const updateInscripcion = async (req, res) => {
  try {
    const { id } = req.params;

    const inscripcion = await Inscripcion.findOne({
      where: {
        id,
      },
    });

    if (!inscripcion) {
      return res
        .status(404)
        .json({ success: false, error: "Inscripción no encontrada" });
    }

    const updatedInscripcion = await inscripcion.update(req.body);

    return res.status(200).json({ success: true, data: updatedInscripcion });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al actualizar la inscripción" });
  }
};

export const deleteInscripcion = async (req, res) => {
  try {
    const { id } = req.params;

    const inscripcion = await Inscripcion.findOne({
      where: {
        id,
      },
    });

    if (!inscripcion) {
      return res
        .status(404)
        .json({ success: false, error: "Inscripción no encontrada" });
    }

    await inscripcion.destroy();

    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al eliminar la inscripción" });
  }
};
