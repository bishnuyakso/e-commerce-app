import { Col, Row } from "react-bootstrap";
import AdminChatRoom from "../../components/admin/AdminChatRoom";
import AdminLinks from "../../components/admin/AdminLinks";

const AdminChats = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinks />
      </Col>
      <Col md={8}>
        <Row>
          <AdminChatRoom />
        </Row>
      </Col>
    </Row>
  );
};

export default AdminChats;
