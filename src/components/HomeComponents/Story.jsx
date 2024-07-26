import { Container, Row, Col } from "react-bootstrap";

export default function Story() {
  return (
    <Container className="d-flex flex-wrap">
      <Row>
        <Col md={6}>
          <div>
            <h2>Our story</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              sequi explicabo a facilis rem consectetur similique magnam magni
              assumenda, possimus, est, asperiores nostrum labore ipsa dolorem
              ratione mollitia accusantium voluptas.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <Container>
            <Row>
              <Col xs={6} className="p-1">
                <img src="image1.jpg" alt="Image 1" className="img-fluid" />
              </Col>
              <Col xs={6} className="p-1">
                <img src="image2.jpg" alt="Image 2" className="img-fluid" />
              </Col>
            </Row>
            <Row>
              <Col xs={6} className="p-1">
                <img src="image3.jpg" alt="Image 3" className="img-fluid" />
              </Col>
              <Col xs={6} className="p-1">
                <img src="image4.jpg" alt="Image 4" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
