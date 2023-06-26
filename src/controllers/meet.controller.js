import Emprendedor from "../models/Emprendedor.js";
import Meet from "../models/Meet.js";

export const createMeet = async (req, res) => {
  try {
    const { fecha, hora, id_emprendedor, investor, place } = req.body;

    const emprendedor = await Emprendedor.findOne({
      where: {
        id: id_emprendedor,
      },
    });

    if (!emprendedor) {
      return res
        .status(404)
        .json({ success: false, error: "Emprendedor no encontrado" });
    }

    const meet = await Meet.create({
      fecha,
      hora,
      investor,
      place,
      id_emprendedor: id_emprendedor,
    });

    return res.status(201).json({ success: true, data: meet });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al crear la meet" });
  }
};

export const getMeets = async (req, res) => {
  try {
    const meets = await Meet.findAll();

    return res.status(200).json({ success: true, data: meets });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al obtener las meets" });
  }
};

export const getMeetById = async (req, res) => {
  try {
    const { id } = req.params;

    const meet = await Meet.findOne({
      where: {
        id,
      },
    });

    if (!meet) {
      return res
        .status(404)
        .json({ success: false, error: "Meet no encontrada" });
    }

    return res.status(200).json({ success: true, data: meet });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al obtener la meet" });
  }
};

export const updateMeet = async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha, hora, id_emprendedor, investor, place } = req.body;

    const meet = await Meet.findOne({
      where: {
        id,
      },
    });

    if (!meet) {
      return res
        .status(404)
        .json({ success: false, error: "Meet no encontrada" });
    } else {
      await Meet.update(
        {
          fecha,
          hora,
          id_emprendedor,
          investor,
          place,
        },
        { where: { id } }
      );
    }

    return res.status(200).json({ success: true, data: meet });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al actualizar la meet" });
  }
};

export const deleteMeet = async (req, res) => {
  try {
    const { id } = req.params;

    const meet = await Meet.findOne({
      where: {
        id,
      },
    });

    if (!meet) {
      return res
        .status(404)
        .json({ success: false, error: "Meet no encontrada" });
    } else {
      await Meet.destroy({
        where: {
          id,
        },
      });
    }

    return res.status(200).json({ success: true, data: meet });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al eliminar la meet" });
  }
};

export const getMeetsByEmprendedor = async (req, res) => {
  try {
    const { id_emprendedor } = req.params;
    const meets = await Meet.findAll({
      where: {
        id_emprendedor,
      },
    });
    return res.status(200).json({ success: true, data: meets });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al obtener las meets" });
  }
};
