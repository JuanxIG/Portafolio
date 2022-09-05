const express = require("express");
const router = express.Router();
const indexController = require("../controllers/controller")

router.get("/", indexController.index)
router.get("/aboutMe", indexController.aboutMe)
router.get("/proyectos", indexController.proyectos)

module.exports = router