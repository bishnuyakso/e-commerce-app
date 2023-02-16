const { Router } = require("express");
const router = Router();
const getOrders = require("../controllers/orderController")

router.get("/", getOrders)

module.exports = router;