import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { data } from "../../api/api";
import StarIcon from "@mui/icons-material/Star";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
export default function BestProducts() {
  // This section will render the most admired products
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  let bestProducts = data.slice(2, 10);
  let displayProducts = bestProducts.slice(index, index + 2);

  function handleNext() {
    if (index > displayProducts.length) {
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
      <Container className="py-5 mt-5">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <h3 className="my-3" style={{ borderBottom: "2px solid #000000" }}>
              The products of the weekend!{" "}
            </h3>
            <StarIcon />
          </Col>
        </Row>

        <Row
          className="my-4"
          style={{
            backgroundColor: "red",
            height: "200px",
            overflow: "hidden",
          }}
        >
          {displayProducts.map((data) => (
            <Col
              className="d-flex flex-column align-items-center"
              key={data._id}
            >
              {" "}
              <h4>{data.name}</h4>
              <img src={data.image} style={{ width: "300px" }} alt="img" />
            </Col>
          ))}
        </Row>
        <Button onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <Link to="/products">
              <Button className="my-2">
                I want to taste it!
                <NorthEastIcon className="fs-minimal" />
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}
