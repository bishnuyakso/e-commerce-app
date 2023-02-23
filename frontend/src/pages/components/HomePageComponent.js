import ProductCarousel from "../../components/ProductCarousel";
import CategoryCard from "../../components/CategoryCard";


import { Row, Container } from "react-bootstrap";

import { useEffect, useState } from "react";

const HomePageComponent = ({ categories, getBestsellers }) => {
  
    const [mainCategories, setMainCategories] = useState([]);
    const [bestSellers, setBestsellers] = useState([]);

    useEffect(() => {
        getBestsellers()
        .then((data) => {
          setBestsellers(data);
        })
        .catch((err) => console.log(err.response.data.message ? err.response.data.message : err.response.data))
        setMainCategories((cat) => categories.filter((item) => !item.name.includes("/")));
    }, [categories])

  return (
    <>
      <ProductCarousel bestSellers={bestSellers}/>
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {mainCategories.map((category, idx) => (
            <CategoryCard key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePageComponent;

