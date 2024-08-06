const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signin" , authController.verifyUser);
router.post("/AddUser" , authController.addUser);

module.exports = router;