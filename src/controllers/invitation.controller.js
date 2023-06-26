import Invitation from "../models/Invitation.js";

export const createInvitation = async (req, res) => {
  try {
    const {
      title,
      organization,
      information,
      image,
      location,
      date,
      time,
      favorite,
      active,
    } = req.body;

    const invitation = await Invitation.create({
      title,
      organization,
      information,
      image,
      location,
      date,
      time,
      favorite,
      active,
    });
    return res.status(201).json({ success: true, data: invitation });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getInvitations = async (req, res) => {
  try {
    const invitations = await Invitation.findAll();
    res.status(200).json({ success: true, data: invitations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getInvitationById = async (req, res) => {
  try {
    const id = req.params.id;
    const invitation = await Invitation.findOne({
      where: {
        id,
      },
    });

    if (!invitation) {
      return res
        .status(404)
        .json({ success: false, error: "Invitation not found" });
    }

    return res.status(200).json({ success: true, data: invitation });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const updateInvitation = async (req, res) => {
  try {
    const id = req.params.id;

    const invitation = await Invitation.findOne({
      where: {
        id,
      },
    });

    if (!invitation) {
      return res
        .status(404)
        .json({ success: false, error: "Invitation not found" });
    }

    const updatedInvitation = await invitation.update(req.body);

    return res.status(200).json({ success: true, data: updatedInvitation });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteInvitation = async (req, res) => {
  try {
    const id = req.params.id;

    const invitation = await Invitation.findOne({
      where: { id: id },
    });

    if (!invitation) {
      return res
        .status(404)
        .json({ success: false, error: "Invitation not found" });
    }

    await invitation.destroy();
    return res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
