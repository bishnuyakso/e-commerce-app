import { Form } from "react-bootstrap";

const PriceFilter = ({ price, setPrice }) => {
  return (
    <>
      <Form.Label>
        <span ClassName="fw-bold">Price no greater than:</span> {price}
      </Form.Label>
      <Form.Range
        min={10}
        max={5000}
        step={5}
        onChange={(e) => setPrice(e.target.value)}
      />
    </>
  );
};

export default PriceFilter;
