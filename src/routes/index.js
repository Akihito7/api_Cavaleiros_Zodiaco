const { Router } = require("express");

const router = Router(); 

const cavaleirosRoutes = require("./cavaleiros_routes");

router.use("/cavaleiros", cavaleirosRoutes);

module.exports = router;