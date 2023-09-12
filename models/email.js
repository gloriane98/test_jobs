/** Création du model email */

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Email = sequelize.define("Email", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  
});

(async () => {
  try {
    await sequelize.sync(); // Synchronise les modèles avec la base de données
    console.log("Table synchronisée avec succès");
  } catch (error) {
    console.error("Erreur lors de la synchronisation de la table :", error);
  }
})();

module.exports = Email;

/*** 
 * sequelize
  .sync()
  .then(() => {
    console.log("Le modèle User a été synchronisé avec la base de données.");
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la synchronisation du modèle User:",
      error
    );
  }); */
