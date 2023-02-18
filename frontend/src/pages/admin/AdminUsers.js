import UsersPage from "./components/UsersPage";

import axios from "axios";

const fetchUsers = async (abctrl) => {
  const { data } = await axios.get("/api/users", {
    signal: abctrl.signal,
  });
  return data;
};
const AdminUsers = () => {
  return <UsersPage fetchUsers={fetchUsers} />;
};

export default AdminUsers;
