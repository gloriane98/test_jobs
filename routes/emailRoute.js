const express = require("express");
const router = express.Router();
const EmailController = require("../controllers/email.Controller");

router.post("/", EmailController.CreateEmail);

module.exports = router;
