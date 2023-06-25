import Apikey from "../models/Apikey.js";

const authenticatedApiKey = async (req, res, next) => {
  const apiKeyValue = req.headers["api-key"];

  try {
    const apiKey = await Apikey.findOne({
      where: { value: apiKeyValue },
    });
    if (apiKey) {
      next();
    }
    return res.status(401).send({ message: "Unauthorized" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export default authenticatedApiKey;
