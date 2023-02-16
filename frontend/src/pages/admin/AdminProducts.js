import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinks from "../../components/admin/AdminLinks";

const deleteHandler = () => {
  if (window.confirm("Are you sure?")) alert("Product deleted!");
};

const AdminOrders = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinks />
      </Col>
      <Col md={10}>
        <h1>
          Product List{" "}
          <LinkContainer to="/admin/create-new-product">
            <Button variant="primary" size="lg">
              Create new
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Hitachi", price: "$5000", category: "TV" },
              { name: "Apple", price: "$12000", category: "Laptops" },
              { name: "Sony", price: "$5000", category: "Games" },
            ].map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <LinkContainer to="/admin/edit-product">
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </LinkContainer>

                  {"/"}

                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={deleteHandler}
                  >
                    <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminOrders;
