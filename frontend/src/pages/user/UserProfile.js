import UserProfileComponent from "./components/UserProfileComponent";
import axios from "axios"

const UserProfile = () => {
  const updateUserApiRequest = async (firstName, lastName, phoneNumber, address, country, zipCode, city, state, password) => { 
    const {data} = await axios.put(
      "/api/users/profile", {
        firstName, lastName, phoneNumber, address, country, zipCode, city, state, password
      }
    )
    return data
  }

  return <UserProfileComponent updateUserApiRequest={updateUserApiRequest} />
}

export default UserProfile;
