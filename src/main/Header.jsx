import NavbarComponent from "./Navbar";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import img from "../assests/img.png";
export default function Header() {
  const location = useLocation();
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
        {location.pathname !== "/products" && (
          <Card
            style={{
              width: "22rem",
              height: "12rem",
              backgroundColor: "transparent",
              backdropFilter: "blur(6px)",
              fontWeight: "bold",
              color: "#000",
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
                <Button variant="info">See our products</Button>
              </Link>
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  );
}
