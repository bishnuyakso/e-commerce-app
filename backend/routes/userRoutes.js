const { Router } = require("express");
const router = Router();
const { getUsers, registerUser, loginUser } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser)

//user logged in routes:


//admin routes
router.get("/", getUsers);

module.exports = router;
