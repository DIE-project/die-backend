import Inscription from "../models/Inscription.js";

export const createInscription = async (req, res) => {
  try {
    const { nombre, apellido, email, telefono, empresa, cargo, mensaje } =
      req.body;

    const inscription = await Inscription.create({
      nombre,
      apellido,
      email,
      telefono,
      empresa,
      cargo,
      mensaje,
    });

    return res.status(201).json({ success: true, data: inscription });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al crear la inscripción" });
  }
};

export const getInscriptions = async (req, res) => {
  try {
    const inscriptions = await Inscription.findAll();

    return res.status(200).json({ success: true, data: inscriptions });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al obtener las inscripciones" });
  }
};

export const getInscriptionById = async (req, res) => {
  try {
    const { id } = req.params;

    const inscription = await Inscription.findOne({
      where: {
        id,
      },
    });

    if (!inscription) {
      return res
        .status(404)
        .json({ success: false, error: "Inscripción no encontrada" });
    }

    return res.status(200).json({ success: true, data: inscription });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al obtener la inscripción" });
  }
};

export const updateInscription = async (req, res) => {
  try {
    const { id } = req.params;

    const inscription = await Inscription.findOne({
      where: {
        id,
      },
    });

    if (!inscription) {
      return res
        .status(404)
        .json({ success: false, error: "Inscripción no encontrada" });
    }

    const updatedInscription = await inscription.update(req.body);

    return res.status(200).json({ success: true, data: updatedInscription });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al actualizar la inscripción" });
  }
};

export const deleteInscription = async (req, res) => {
  try {
    const { id } = req.params;

    const inscription = await Inscription.findOne({
      where: {
        id,
      },
    });

    if (!inscription) {
      return res
        .status(404)
        .json({ success: false, error: "Inscripción no encontrada" });
    }

    await inscription.destroy();

    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al eliminar la inscripción" });
  }
};
