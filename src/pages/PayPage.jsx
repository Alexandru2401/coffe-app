import { Container, Row, Col } from "react-bootstrap";
import PayForm from "../components/payComponents/PayForm";
import Cart from "../components/payComponents/Cart";
export default function PayPage() {
  return (
    <Container>
      <Row>
        <Col>
          <PayForm />
        </Col>
        <Col>
          <Cart />
        </Col>
      </Row>
    </Container>
  );
}
