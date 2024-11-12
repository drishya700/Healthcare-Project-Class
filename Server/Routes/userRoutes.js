const express = require("express");
var app = express();
var router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const { MyAccount } = require("../controllers/userController");

// Define routes
router.post("/", registerUser);
router.post("/",loginUser);
router.get('/myaccount',MyAccount);
// router.post("/login", loginUser);

module.exports = router;
