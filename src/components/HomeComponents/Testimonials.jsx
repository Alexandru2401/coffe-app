import { Container, Row, Col } from "react-bootstrap";
import CarouselProducts from "../CarouselProducts";

export default function Testimonials() {
  return (
    <Container>
      <Col>
        <Row>
          <h3>Testimonials</h3>
        </Row>
        <Row>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint dolore
          nisi deleniti assumenda adipisci, vel pariatur itaque deserunt
          incidunt, distinctio molestias iusto soluta facilis eaque eum voluptas
          quod odio sequi.
        </Row>
      </Col>
      <Row>
        <CarouselProducts />
      </Row>
    </Container>
  );
}
