import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
export default function NavbarComponent() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#ECB176" }}>
      <Container>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="fw-bold fs-5">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fw-bold fs-5">
              Contact
            </Nav.Link>
            <NavDropdown
              title="Pages"
              id="navbarScrollingDropdown"
              className="fw-bold fs-5"
            >
              <NavDropdown.Item
                as={Link}
                to="/products"
                className="fw-bold fs-5"
              >
                Products
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/favourites"
                className="fw-bold fs-5"
              >
                Favourites
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="https://glovoapp.com"
              target="_blank"
              className="fw-bold fs-5"
            >
              Order now!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
