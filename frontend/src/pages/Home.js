import ProductCarousel from "../components/ProductCarousel";
import CategoryCard from "../components/CategoryCard";
import { Row, Container } from "react-bootstrap";

const Home = () => {
  
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Software",
    "Cameras",
    "Books",
    "Videos",
  ];
  return (
    <>
      <ProductCarousel />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, idx) => (
            <CategoryCard key={idx} category={category} idx={idx}/>
          ))}
        </Row>{" "}
      </Container>
    </>
  );
};

export default Home;
