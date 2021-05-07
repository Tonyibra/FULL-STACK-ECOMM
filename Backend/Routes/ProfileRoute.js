const router = require("express").Router();
const { updateProfile } = require("../Controllers/ProfileController");
const { verifyToken } = require("../middleware/auth.js");

router.route("/").patch(verifyToken, updateProfile);

module.exports = router;
