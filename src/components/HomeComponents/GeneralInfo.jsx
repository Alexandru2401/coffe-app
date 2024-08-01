import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function GeneralInfo() {
  // This part will contain some info about products
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <Container className="my-5 d-flex flex-column align-items-center">
        <Row>
          <Col className="d-flex align-items-center flex-column">
            <h2 style={{ borderBottom: "2px solid #000000" }} className="my-4">
              General Info
            </h2>
          </Col>
        </Row>

        <Row className="w-100 d-flex justify-content-center">
          <Col xs={12} md={6} lg={3} className="d-flex justify-content-center">
            <Card
              style={{ width: "19rem", backgroundColor: "#ECB176" }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title style={{ borderBottom: "2px solid #000000" }}>
                  No chemical
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Organic Coffee
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi maiores a sapiente deleniti nihil, dolore nemo
                  molestiae nostrum illo nam similique.
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Link to="/products">
                    <Button>See products</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3} className="d-flex justify-content-center">
            <Card
              style={{ width: "19rem", backgroundColor: "#ECB176" }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title style={{ borderBottom: "2px solid #000000" }}>
                  No Preservatives
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Fresh products
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi maiores a sapiente deleniti nihil, dolore nemo
                  molestiae nostrum illo nam similique.
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Link to="/products">
                    <Button>See products</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3} className="d-flex justify-content-center">
            <Card
              style={{ width: "19rem", backgroundColor: "#ECB176" }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title style={{ borderBottom: "2px solid #000000" }}>
                  No Additives
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  No allergens
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi maiores a sapiente deleniti nihil, dolore nemo
                  molestiae nostrum illo nam similique.
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Link to="/products">
                    <Button>See products</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3} className="d-flex justify-content-center">
            <Card
              style={{ width: "19rem", backgroundColor: "#ECB176" }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title style={{ borderBottom: "2px solid #000000" }}>
                  Just Coffee
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Real Coffee
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi maiores a sapiente deleniti nihil, dolore nemo
                  molestiae nostrum illo nam similique.
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Link to="/products">
                    <Button>See products</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}
