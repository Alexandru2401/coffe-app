import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProductsVariety() {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }} 
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
    >
      <Container
        className="my-4 py-3"
        style={{ backgroundColor: "#ECB176", borderRadius: "5px" }}
      >
        <Row>
          <Col md={6} className="d-flex">
            <h2 className="mx-auto">Discover the best coffee!</h2>
          </Col>
        </Row>
        <Container className="my-5">
          <Row>
            <Col md={6} className="d-flex align-items-center">
              {/* <div style={{ maxWidth: "600px" }}>
                <CarouselFadeExample />
              </div> */}
            </Col>
            <Col md={6} style={{ maxWidth: "600px" }}>
              <Card
                className="mb-3 position-realtive"
                style={{ backgroundColor: "#FED8B1" }}
              >
                <Card.Header as="h5">
                  Hot beverages
                  <LocalFireDepartmentIcon />
                </Card.Header>
                <Card.Body>
                  <Card.Title>Perfect for early mornings</Card.Title>
                  <Card.Text>Get started with a boost of energy!</Card.Text>
                  <Link to="/products">
                    <Button variant="primary">See more</Button>
                  </Link>
                </Card.Body>
              </Card>
              <Card className="mb-3" style={{ backgroundColor: "#FED8B1" }}>
                <Card.Header as="h5">
                  Iced beverages
                  <AcUnitIcon />
                </Card.Header>
                <Card.Body>
                  <Card.Title>For hot days</Card.Title>
                  <Card.Text>
                    Refresh yourself with the coldest drinks!
                  </Card.Text>
                  <Link to="/products">
                    <Button variant="primary">See more</Button>
                  </Link>
                </Card.Body>
              </Card>
              <Card className="mb-3" style={{ backgroundColor: "#FED8B1" }}>
                <Card.Header as="h5">
                  Syrups
                  <CoffeeIcon />
                </Card.Header>
                <Card.Body>
                  <Card.Title>Try something new</Card.Title>
                  <Card.Text>
                    The best syrup combined with the best coffee!
                  </Card.Text>
                  <Link to="/products">
                    <Button variant="primary">See more</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </motion.div>
  );
}
