import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="d-flex justify-content-around py-3"
      style={{ borderTop: "2px solid #6F4E37", backgroundColor:"#ECB176" }}
    >
      <Row>
        <h2>Contact Details:</h2>
        <ul>
          <li>123 Street, City, Country</li>
          <li>123-456-789</li>
          <li>info@eCommerce.com</li>
        </ul>
      </Row>
      <Row>
        <h2>Sponsors:</h2>
        <ul>
          <li>ShopOne</li>
          <li>ZR Brand</li>
          <li>No1 Jeans</li>
          <li>ClothesWorld</li>
          <li>Shop$Go</li>
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
