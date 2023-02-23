import { Form } from "react-bootstrap";

const PriceFilter = ({ price, setPrice }) => {
  return (
    <>
      <Form.Label>
        <span ClassName="fw-bold">Price no greater than:</span> {price}
      </Form.Label>
      <Form.Range
        min={10}
        max={1000}
        step={10}
        onChange={(e) => setPrice(e.target.value)}
      />
    </>
  );
};

export default PriceFilter;
