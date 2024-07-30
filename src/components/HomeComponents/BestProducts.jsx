import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { data } from "../../api/api";
import StarIcon from "@mui/icons-material/Star";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function BestProducts() {
  // This section will render the most admired products
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
      <Container className="py-5 mt-5">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <h3 className="my-3" style={{ borderBottom: "2px solid #000000" }}>
              The products of the weekend!{" "}
            </h3>
            <StarIcon />
          </Col>
        </Row>

        <Row className="my-4">
          {data.slice(4, 8).map((data) => (
            <Col>
              {" "}
              <h4>{data.name}</h4>
              <img src={data.image} style={{ width: "300px" }} />
            </Col>
          ))}
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
