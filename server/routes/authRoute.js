const { SignUp } = require("../controllers/authController");
const router = require("express").Router();

router.post("/signup", SignUp);

module.exports = router;