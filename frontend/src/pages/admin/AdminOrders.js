import OrdersPage from "./components/OrdersPage";
import axios from "axios";

const getOrders = async () => {
  const { data } = await axios.get("/api/orders/admin");
  return data;
}

const AdminOrders = () => {
  return <OrdersPage getOrders={getOrders} />;
};

export default AdminOrders;

