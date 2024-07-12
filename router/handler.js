const express = require("express");
const { createNewShort } = require("../controller/urlcontroller");

const router = express.Router();

router.route("/api/v1/shorturl").post(createNewShort)

module.exports = router;