import Emprendedor from "../models/Emprendedor.js";

export const createEmprendedor = async (req, res) => {
  try {
    const { nombre, apellido, correo, telefono, direccion } = req.body;
    const emprendedor = await Emprendedor.create({
      nombre,
      apellido,
      correo,
      telefono,
      direccion,
    });

    return res.status(201).json({ success: true, data: emprendedor });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al crear el emprendedor" });
  }
};

export const getEmprendedores = async (req, res) => {
  try {
    const emprendedores = await Emprendedor.findAll();

    return res.status(200).json({ success: true, data: emprendedores });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al obtener los emprendedores" });
  }
};

export const getEmprendedorById = async (req, res) => {
  try {
    const { id } = req.params;

    const emprendedor = await Emprendedor.findOne({
      where: {
        id,
      },
    });

    if (!emprendedor) {
      return res
        .status(404)
        .json({ success: false, error: "Emprendedor no encontrado" });
    }

    return res.status(200).json({ success: true, data: emprendedor });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al obtener el emprendedor" });
  }
};

export const updateEmprendedor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, correo, telefono, direccion } = req.body;

    const emprendedor = await Emprendedor.findOne({
      where: {
        id,
      },
    });

    if (!emprendedor) {
      return res
        .status(404)
        .json({ success: false, error: "Emprendedor no encontrado" });
    }

    await emprendedor.update({
      nombre,
      apellido,
      correo,
      telefono,
      direccion,
    });

    return res.status(200).json({ success: true, data: emprendedor });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al actualizar el emprendedor" });
  }
};

export const deleteEmprendedor = async (req, res) => {
  try {
    const { id } = req.params;

    const emprendedor = await Emprendedor.findOne({
      where: {
        id,
      },
    });

    if (!emprendedor) {
      return res
        .status(404)
        .json({ success: false, error: "Emprendedor no encontrado" });
    }

    await emprendedor.destroy();

    return res
      .status(200)
      .json({ success: true, message: "Emprendedor eliminado correctamente" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error al eliminar el emprendedor" });
  }
};
