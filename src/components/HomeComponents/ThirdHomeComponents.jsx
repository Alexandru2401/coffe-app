import { Container, Row, Col } from "react-bootstrap";
import img from "../../assests/img.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function ThirdHomeComponent() {
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
    <Container style={{ backgroundColor: "#ECB176", borderRadius: "5px" }}>
      <Row className="my-3">
        <Col className="d-flex flex-column align-items-center">
          <h2 className="my-4" style={{ borderBottom: "2px solid #000000" }}>
            Everithing you need!
          </h2>
        </Col>
      </Row>
      <Row className="m-3">
        <Col className="d-flex flex-column align-items-center col-component">
          <h3>Intense Flavour!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
      </Row>
      <Row className="m-3">
        <Col xs={12} lg={4} className="col-component">
          <h3>The Best Taste!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
        <Col xs={12} lg={4} className="col-component">
          <img
            src={img}
            style={{
              width: "300px",
              borderRadius: "50%",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Col>
        <Col xs={12} lg={4} className="col-component">
          <h3>100% Coffee!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
      </Row>
      <Row className="m-3 pb-3">
        <Col xs={12} lg={6} className="col-component">
          <h3>Crazy Combinations!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
        <Col xs={12} lg={6} className="col-component">
          <h3>Just For You!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            repudiandae autem minus natus molestias maiores blanditiis debitis
            labore, sed officiis at voluptates obcaecati porro quis beatae
            impedit architecto, explicabo alias!
          </p>
        </Col>
      </Row>
    </Container>
    </motion.div>
  );
}
