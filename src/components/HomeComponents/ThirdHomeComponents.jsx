import { Container, Row, Col } from "react-bootstrap";
import bgImg from "../../assests/bgImg.jpg"
export default function ThirdHomeComponent() {
  return (
    <Container>
        <h3>Everithing you need!</h3>
      <Row>
        <Col>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
        <Col>
        <img src={bgImg} style={{width:"200px"}}/>
        </Col>
        <Col>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
        <Col>
          <h2>Lorem</h2>
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
