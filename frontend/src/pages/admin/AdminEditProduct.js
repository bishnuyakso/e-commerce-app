import EditProductPageComponent from "./components/EditProductPageComponent"
import {useSelector} from "react-redux"

const AdminEditProduct = () => {
 

  const { categories } = useSelector((state) => state.getCategories);
   

  return <EditProductPageComponent categories={categories}/>
}
export default AdminEditProduct;

