import UserProfileComponent from "./components/UserProfileComponent";
import axios from "axios";
import { useSelector } from "react-redux";

//updating user data function
const updateUserApiRequest = async (
  firstName,
  lastName,
  phoneNumber,
  address,
  country,
  zipCode,
  city,
  state,
  password
) => {
  const { data } = await axios.put("/api/users/profile", {
    firstName,
    lastName,
    phoneNumber,
    address,
    country,
    zipCode,
    city,
    state,
    password,
  });
  return data;
};

//fetching user data with user id
const fetchUser = async (user_id) => {
  const { data } = await axios.get("/api/users/profile/" + user_id);
  return data;
}
const UserProfile = () => {
  //getting userInfo => user_id form redux userRegisterLogin object
  const { userInfo } = useSelector((state) => state.userRegisterLogin);
  return (
    <UserProfileComponent
      updateUserApiRequest={updateUserApiRequest}
      fetchUser={fetchUser}
      userInfo={userInfo}
    />
  );
};

export default UserProfile;
