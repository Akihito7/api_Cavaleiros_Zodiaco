const { Router } = require("express");

const cavaleirosRoutes = Router();

const cavaleirosController = require("../controllers/cavaleirosController");

const cavaleirosControllers =  new cavaleirosController();

cavaleirosRoutes.get("/", cavaleirosControllers.getAllCavaleiros);

cavaleirosRoutes.get("/:name", cavaleirosControllers.getACavaleiro);

cavaleirosRoutes.post("/", cavaleirosControllers.createCavaleiros);

module.exports = cavaleirosRoutes;