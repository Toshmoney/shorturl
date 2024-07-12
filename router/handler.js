const express = require("express");
const { createNewShort, getUrl } = require("../controller/urlcontroller");

const router = express.Router();

router.route("/api/v1/shorturl").post(createNewShort)
router.route("/:shorten").get(getUrl)

module.exports = router;