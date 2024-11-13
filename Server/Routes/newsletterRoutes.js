const express= require("express");
const router = express.Router();
const {getNewsletter , createNewsletter}=require("../controllers/newsletterController");
const {jwtAuthMiddleware } = require("../middleware/jwtMiddleware");

router.get("/" , getNewsletter);
routes.post("/" , createNewsletter , jwtAuthMiddleware);