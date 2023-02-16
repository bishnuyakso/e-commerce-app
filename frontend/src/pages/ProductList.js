import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import SortOptions from "../components/SortOptions";
import PriceFilter from "../components/filterQueryOptions/PriceFilter";
import RatingFilter from "../components/filterQueryOptions/RatingFilter";
import CategoryFilter from "../components/filterQueryOptions/CategoryFilter";
import AttributesFilter from "../components/filterQueryOptions/AttributesFilter";
import ProductForList from "../components/ProductForList";
import PaginationPage from "../components/PaginationPage";

const ProductList = () => {
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
              <Button variant="primary">Filter</Button>
              <Button variant="danger">Reset filter</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({length: 5}).map((_, idx) => (
            <ProductForList key={idx} images={["games", "monitors", "tablets", "games", "monitors"]} idx={idx} />
          ))}
          
          <PaginationPage />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
