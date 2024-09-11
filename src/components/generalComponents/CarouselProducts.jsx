import { data } from "../../api/api";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
export default function CarouselProducts() {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  let bestProducts = data.slice(2, 15);
  let displayProducts = bestProducts.slice(index, index + 2);
  return (
    <motion.div
    // ref={ref}
    // initial={{ opacity: 0, y: 50 }}
    // animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    // transition={{ duration: 0.6 }}
    >
      <Container
        className="my-4 py-4 d-flex align-items-center justify-content-center flex-column"
        style={{ backgroundColor: "#ECB176", borderRadius: "5px" }}
      >
        <Row className="my-3">
          <h2>Choose from a wide variety of products</h2>
        </Row>

        <Row
          className="mb-4 w-100 my-3 d-flex flex-wrap align-items-center"
          style={{ height: "350px", width: "70%", overflow: "hidden", border: "1px solid red" }}
        >
          {displayProducts.map((data) => (
            <Col key={data._id} style={{ maxWidth: "350px" }} className="mx-auto">
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
