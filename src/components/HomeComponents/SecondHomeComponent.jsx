import { Container, Card, Button } from "react-bootstrap";
import CarouselFadeExample from "./BotCarousel";

export default function SecondHomeComponents() {
  return (
    <Container className="my-4">
      <h2>Lorem ipsum</h2>
      <Container className="d-flex align-items-center my-5 justify-content-between">
        <div style={{ maxWidth: "600px" }}>
          <CarouselFadeExample />
        </div>
        <div style={{ maxWidth: "600px" }}>
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </Container>
  );
}
