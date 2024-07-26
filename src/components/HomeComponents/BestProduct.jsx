import { Container, Row, Col, Button } from "react-bootstrap";
import bgImg from "../../assests/bgImg.jpg";

export default function BestProduct() {
  // This section will render the most admired products
  return (
    <Container className="my-4">
      <h3>The products of the weekend! </h3>
      <Container>
        <Row>
          <Col>
            {" "}
            <img src={bgImg} style={{ width: "300px" }} />
          </Col>
          <Col>
            {" "}
            <img src={bgImg} style={{ width: "300px" }} />
          </Col>
          <Col>
            {" "}
            <img src={bgImg} style={{ width: "300px" }} />
          </Col>
          <Col>
            {" "}
            <img src={bgImg} style={{ width: "300px" }} />
          </Col>
        </Row>
      </Container>
      <Button variant="danger" className="my-2">I want to taste it!</Button>
    </Container>
  );
}
