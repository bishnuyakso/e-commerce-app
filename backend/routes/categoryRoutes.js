const { Router } = require("express");
const router = Router();
const {
  getCategories,
  newCategory,
  deleteCategory,
  saveAttr,
} = require("../controllers/categoryController");

router.get("/", getCategories);
router.post("/", newCategory);
router.delete("/:category", deleteCategory);
router.post("/attr", saveAttr);

module.exports = router;
