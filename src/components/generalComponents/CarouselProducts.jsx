import { data } from "../../api/api";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion, transform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function CarouselProducts() {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  let bestProducts = data.slice(2, 16);
  let displayProducts = bestProducts.slice(index, index + 2);

  function handleNext() {
    if (index >= bestProducts.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePrev() {
    if (index === 0) {
      setIndex(bestProducts.length - 2);
    } else {
      setIndex(index - 1);
    }
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <Container
        className="my-4 py-4 d-flex align-items-center justify-content-center flex-column box-shadow-effect"
        style={{ backgroundColor: "#ECB176", borderRadius: "5px" }}
      >
        <Row className="my-3">
          <h2>Choose from a wide variety of products</h2>
        </Row>

        <Row
          className="mb-4 w-100 my-3 d-flex align-items-center justify-content-around"
          style={{
            height: "350px",
            width: "70%",
            overflow: "hidden",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor:"#FFF2E1"
          }}
        >
          {" "}
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <Button onClick={handlePrev}>
              <ArrowBackIosIcon />
            </Button>
          </Col>
          {displayProducts.map((data) => (
            <Col key={data._id} style={{ maxWidth: "350px" }} className="mx-4">
              <Link to="/products" className="product-link">
                <div className="product-container">
                  <h2 style={{ fontSize: "25px", color: "#6F4E37" }}>
                    {data.name}
                  </h2>
                  <img src={data.image} style={{ maxWidth: "350px" }} />
                </div>
              </Link>
            </Col>
          ))}
          <Col className="d-flex flex-column align-items-center justify-content-center">
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
