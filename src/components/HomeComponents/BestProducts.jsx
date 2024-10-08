import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { data } from "../../api/api";
import StarIcon from "@mui/icons-material/Star";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function BestProducts() {
  // This section will render the most admired products
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  let bestProducts = data.slice(2, 10);
  let displayProducts = bestProducts.slice(index, index + 1);

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

  const basicsStyle = `d-flex flex-column align-items-center`;
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
          className="my-4 py-4 mx-auto box-shadow-effect"
          style={{
            backgroundColor: "#ECB176",
            borderRadius: "10px",
            height: "300px",
            overflow: "hidden",
            width: "70%"
          }}
        >
          <Col className={`${basicsStyle} justify-content-center`}>
            <Button onClick={handlePrev}>
              <ArrowBackIosIcon />
            </Button>
          </Col>
          {displayProducts.map((data) => (
            <Col className={basicsStyle} key={data._id}>
              {" "}
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: "easeIn" }}
                exit={{ x: -300, opacity: 0 }}
              >
                <h4 className="fs-5">{data.name}</h4>
                <img src={data.image} style={{ maxWidth: "400px" }} alt="img" />
              </motion.div>
            </Col>
          ))}
          <Col className={`${basicsStyle} justify-content-center`}>
            {" "}
            <Button onClick={handleNext}>
              <ArrowForwardIosIcon />
            </Button>
          </Col>
        </Row>

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
