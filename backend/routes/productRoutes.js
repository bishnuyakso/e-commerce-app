const { Router } = require("express");
const router = Router();
const {verifyIsLoggedIn, verifyIsAdmin} = require("../middleware/verifyAuthToken")
const {
  getProducts,
  getProductById,
  getBestsellers,
  adminGetProducts,
  adminDeleteProduct,
  adminCreateProduct,
  adminUpdateProduct,
  adminUpload, 
  adminDeleteProductImage,
} = require("../controllers/productController");

router.get("/category/:categoryName/search/:searchQuery", getProducts);
router.get("/", getProducts);
router.get("/search/:searchQuery", getProducts);
router.get("/category/:categoryName", getProducts);
router.get("/get-one/:id", getProductById);
router.get("/bestsellers", getBestsellers);


//admin routes:
router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)

router.get("/admin", adminGetProducts);
router.delete("/admin/:id", adminDeleteProduct);
router.delete("/admin/image/:imagePath/:productId", adminDeleteProductImage)
router.put("/admin/:id", adminUpdateProduct)
router.post("/admin", adminCreateProduct )
router.post("/admin/upload", adminUpload)

module.exports = router;
