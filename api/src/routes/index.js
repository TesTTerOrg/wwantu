const { Router } = require("express");
const router = Router();

const favPath = require("./favoritos.js");

router.use("/fav", favPath);

module.exports = router;
