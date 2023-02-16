const { Router } = require("express");
const router = Router();
const getCategories = require("../controllers/userController")

router.get("/", getCategories)

module.exports = router;