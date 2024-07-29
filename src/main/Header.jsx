import NavbarComponent from "./Navbar";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../assests/img.png";
export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        height: "60vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavbarComponent />
      <Container className="d-flex align-items-center justify-content-center h-100">
        {" "}
        <Card
          style={{
            width: "20rem",
            backgroundColor: "transparent",
            backdropFilter: "blur(6px)",
            fontWeight: "bold",
            color:"#000"
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>
              The best taste!
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Enjoy the intense flavor
            </Card.Subtitle>
            <Card.Text>It' s not about cofee, it's about love!</Card.Text>
            <Link to="/products">
              <Button variant="info">See products</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
