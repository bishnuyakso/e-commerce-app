import { BrowserRouter, Routes, Route } from "react-router-dom";
//components:
import Header from "./components/Header";
import Footer from "./components/Footer";

//user components
import RoutesWithUserChat from "./components/user/RoutesWithUserChat";

//publicly available pages:
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import CartItems from "./pages/CartItems";
import ProtectedRoutes from "./components/ProtectedRoutes";

//protected user pages:
import UserProfile from "./pages/user/UserProfile";
import UserOrder from "./pages/user/UserOrder";
import UserOrderDetails from "./pages/user/UserOrderDetails";
import UserCartDetails from "./pages/user/UserCartDetails";

//protected admin pages:
import AdminUsers from "./pages/admin/AdminUsers";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminOrderDetails from "./pages/admin/AdminOrderDetails";
import AdminEditUser from "./pages/admin/AdminEditUser";
import AdminEditProduct from "./pages/admin/AdminEditProduct";
import AdminCreateProduct from "./pages/admin/AdminCreateProduct";
import AdminChats from "./pages/admin/AdminChats";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route element={<RoutesWithUserChat />}>
            {/* publicly available routes */}
            <Route path="/" element={<Home />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<CartItems />} />
            <Route path="*" element="Page not exits 404" />
          </Route>

          {/* user protected routes: */}

          <Route element={<ProtectedRoutes admin={false} />}>
            <Route path="/user" element={<UserProfile />} />
            <Route path="/user/my-orders" element={<UserOrder />} />
            <Route path="/user/cart-details" element={<UserCartDetails />} />
            <Route path="/user/order-details" element={<UserOrderDetails />} />
          </Route>

          {/* Admin protected routes: */}

          <Route element={<ProtectedRoutes admin={true} />}>
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/edit-user" element={<AdminEditUser />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route
              path="/admin/create-new-product"
              element={<AdminCreateProduct />}
            />
            <Route path="/admin/edit-product" element={<AdminEditProduct />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route
              path="/admin/order-details"
              element={<AdminOrderDetails />}
            />
            <Route path="/admin/chats" element={<AdminChats />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
