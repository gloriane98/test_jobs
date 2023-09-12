const Email = require("../models/email");

exports.CreateEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const createdEmail = await Email.create({ email });
    res
      .status(201)
      .json({
        message: "Adresse e-mail enregistrée avec succès",
        email: createdEmail,
      });
    console.log(createdEmail);
  } catch (error) {
    console.error(error);
    console.error(error);
    res.status(230).json({
      message:
        "Une erreur est survenue lors de l'enregistrement de l'adresse e-mail.",
    });
  }
};
