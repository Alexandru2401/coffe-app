import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="d-flex justify-content-around py-3"
      style={{ borderTop: "2px solid #6F4E37", backgroundColor: "#ECB176" }}
    >
      <Row>
        <h2>Contact Details:</h2>
        <ul>
          <li>123 Street, City, Country</li>
          <li>123-456-789</li>
          <li>info@CoffeeShop.com</li>
        </ul>
      </Row>
      <Row>
        <h2>Comercial</h2>
        <ul>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="#">
            <li>FAQ</li>
          </Link>
          <Link to="#">
            <li>Terms and conditions</li>
          </Link>
          <Link>
            <li>Cookies</li>
          </Link>
        </ul>
      </Row>
      <Row>
        <h2>Follow us on:</h2>
        <ul style={{ listStyle: "none" }}>
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <li style={{ color: "#151515" }}>Instragram</li>
          </Link>
          <Link
            to="https://www.facebook.com/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <li style={{ color: "#151515" }}>Facebook</li>
          </Link>
          <Link
            to="https://x.com/i/flow/login"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <li style={{ color: "#151515" }}>X (Twitter)</li>
          </Link>
        </ul>
      </Row>
    </footer>
  );
}
