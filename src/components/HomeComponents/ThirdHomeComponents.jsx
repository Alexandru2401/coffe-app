import { Container, Row, Col } from "react-bootstrap";
import img from "../../assests/img.png";
export default function ThirdHomeComponent() {
  return (
    <Container style={{ backgroundColor: "#ECB176", borderRadius: "5px" }}>
      <h3 className="py-2">Everithing you need!</h3>
      <Row className="my-3">
        <Col>
          <h2>Intense Flavour!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col xs={12} lg={4}>
          <h2>The Best Taste!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
        <Col xs={12} lg={4}>
          <img
            src={img}
            style={{
              width: "300px",
              borderRadius: "50%",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Col>
        <Col xs={12} lg={4}>
          <h2>100% Coffee!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col xs={12} lg={6}>
          <h2>Crazy Combinations!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
        <Col xs={12} lg={6}>
          <h2>Just For You!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
      </Row>
    </Container>
  );
}
