import { Container, Card, Button, Row, Col } from "react-bootstrap";
import CarouselFadeExample from "./BotCarousel";

export default function ProductsVariety() {
  return (
    <Container
      className="my-4"
      style={{ backgroundColor: "#ECB176", borderRadius: "5px" }}
    >
      <h2>Discover a variety of coffee varieties</h2>
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <div style={{ maxWidth: "600px" }}>
              <CarouselFadeExample />
            </div>
          </Col>
          <Col md={6}>
            <div style={{ maxWidth: "600px" }}>
              <Card className="mb-3" style={{ backgroundColor: "#FED8B1" }}>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="mb-3" style={{ backgroundColor: "#FED8B1" }}>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="mb-3" style={{ backgroundColor: "#FED8B1" }}>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
