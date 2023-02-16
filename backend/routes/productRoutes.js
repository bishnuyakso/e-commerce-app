const { Router } = require("express");
const router = Router();
const {
  getProducts,
  getProductById,
  getBestsellers,
  adminGetProducts,
  adminDeleteProduct,
  adminCreateProduct,
  adminUpdateProduct,
  adminUpload, 
} = require("../controllers/productController");

router.get("/category/:categoryName/search/:searchQuery", getProducts);
router.get("/", getProducts);
router.get("/search/:searchQuery", getProducts);
router.get("/category/:categoryName", getProducts);
router.get("/get-one/:id", getProductById);
router.get("/bestsellers", getBestsellers);

//admin routes:
router.get("/admin", adminGetProducts);
router.delete("/admin/:id", adminDeleteProduct);
router.put("/admin/:id", adminUpdateProduct)
router.post("/admin", adminCreateProduct )
router.post("/admin/upload", adminUpload)

module.exports = router;
