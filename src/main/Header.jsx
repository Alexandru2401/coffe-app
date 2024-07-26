import NavbarComponent from "./Navbar";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div
      style={{ backgroundColor: "#ECB176", height: "50vh"}}
    >
      <NavbarComponent />
      <Container className="d-flex align-items-center justify-content-center h-100">
        {" "}
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>The best taste!</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Enjoy the intense flavor
            </Card.Subtitle>
            <Card.Text>
              It' s not about cofee, it's about love!
            </Card.Text>
            <Link to="/products"><Button variant="info">See products</Button></Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
