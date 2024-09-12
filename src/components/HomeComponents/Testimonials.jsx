import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { testimonials } from "../../api/testimonials";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  function handleNext() {
    setIndex((prevIndex) => (prevIndex >= testimonials.length - 1 ? 0 : prevIndex + 1));
  }

  function handlePrev() {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.6 }}
    >
      <Container
        className="my-5 py-4 d-flex align-items-center justify-content-center flex-column"
        style={{ backgroundColor: "#ECB176", borderRadius: "5px" }}
      >
        <Row className="my-3">
          <h2>Our coffee is the best! We don't say that, our customers do!</h2>
        </Row>

        <Row
          className="mb-4 w-100 my-3 d-flex align-items-center justify-content-around"
          style={{
            height: "350px",
            width: "70%",
            overflow: "hidden",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "#FFF2E1",
          }}
        >
          <Col className="justify-content-center">
            <Button onClick={handlePrev}>
              <ArrowBackIosIcon />
            </Button>
          </Col>

          <Col key={testimonials[index].id}>
            <Card style={{ width: "20rem" }} className="m-3">
              <Card.Img src={testimonials[index].imgSrc} alt="img" />
              <Card.Body
                style={{ backgroundColor: "#102C57", color: "#ECB176" }}
              >
                <Card.Text style={{ fontSize: "20px" }}>
                  {testimonials[index].description}
                </Card.Text>
                <Card.Text>
                  {testimonials[index].rating}
                  <StarIcon />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="justify-content-center">
            <Button onClick={handleNext}>
              <ArrowForwardIosIcon />
            </Button>
          </Col>
        </Row>

        <Row className="my-3">
          <Link to="/products">
            <Button variant="dark">Order now!</Button>
          </Link>
        </Row>
      </Container>
    </motion.div>
  );
}
