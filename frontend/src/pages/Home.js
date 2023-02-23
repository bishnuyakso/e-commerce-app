import HomePageComponent from "./components/HomePageComponent";
import {useSelector} from "react-redux"

const Home = () => {

  const { categories } = useSelector((state) => state.getCategories);

return <HomePageComponent categories={categories}/>
};

export default Home;
