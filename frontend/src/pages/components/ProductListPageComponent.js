import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import SortOptions from "../../components/SortOptions";
import PriceFilter from "../../components/filterQueryOptions/PriceFilter";
import RatingFilter from "../../components/filterQueryOptions/RatingFilter";
import CategoryFilter from "../../components/filterQueryOptions/CategoryFilter";
import AttributesFilter from "../../components/filterQueryOptions/AttributesFilter";
import ProductForList from "../../components/ProductForList";
import PaginationPage from "../../components/PaginationPage";
import { useEffect, useState } from "react";


const ProductListPageComponent = ({getProducts}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
        .then(products => setProducts(products.products))
        .catch((er) => console.log(er));
    }, [])

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="mb-3 mt-3">
              <SortOptions />
            </ListGroup.Item>
            <ListGroup.Item>
              FILTER: <br />
              <PriceFilter />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilter />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilter />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilter />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary">Filter</Button>{" "}
              <Button variant="danger">Reset filters</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {products.map((product) => (
            <ProductForList
              key={product._id}
              images={product.images}
              name={product.name}
              description={product.description}
              price={product.price}
              rating={product.rating}
              reviewsNumber={product.reviewsNumber}
              productId={product._id}
            />
          ))}
          <PaginationPage />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPageComponent;

