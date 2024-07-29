import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { data } from "../../api/api";
export default function BestProducts() {
  // This section will render the most admired products
  return (
    <Container className="py-4 mt-4">
      <h3>The products of the weekend! </h3>
      <Container>
        <Row>
          {data.slice(4, 8).map((data) => (
            <Col>
              {" "}
              <h3 style={{ fontSize: "20px" }}>{data.name}</h3>
              <img src={data.image} style={{ width: "300px" }} />
            </Col>
          ))}
        </Row>
      </Container>
      <Link to="/products">
        <Button variant="danger" className="my-2">
          I want to taste it!
        </Button>
      </Link>
    </Container>
  );
}
