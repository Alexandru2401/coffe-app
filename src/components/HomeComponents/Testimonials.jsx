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
    setIndex((prevIndex) =>
      prevIndex >= testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handlePrev() {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
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
          className="d-flex align-items-center mx-auto"
          //  className="mb-4 w-100 my-3 d-flex align-items-center justify-content-around"
          //  style={{
          //    height: "350px",
          //    width: "70%",
          //    overflow: "hidden",
          //    border: "1px solid black",
          //    borderRadius: "5px",
          //    backgroundColor: "#FFF2E1",
          //  }}
        >
          <Col className="d-flex align-items-center">
            <Col className="justify-content-center" lg={1}>
              <Button onClick={handlePrev}>
                <ArrowBackIosIcon />
              </Button>
            </Col>

            <Col key={testimonials[index].id}>
              <Card
                style={{ width: "20rem", minHeight: "400px" }}
                className="m-3"
              >
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
          </Col>
          <Col className="box-shadow-effect mx-2" style={{backgroundColor:"#FED8B1", border: "1px solid black", borderRadius: "5px"}}>
            <h2>100% coffee!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              sequi excepturi laborum, magni reiciendis fugit facere et nihil
              dolores aut maiores hic ratione iste officiis at recusandae
              doloremque cumque minima?
            </p>
            <h2>Coffee as Experience!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              sequi excepturi laborum, magni reiciendis fugit facere et nihil
              dolores aut maiores hic ratione iste officiis at recusandae
              doloremque cumque minima?
            </p>
            <h2> Mindful Moments with Coffee!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              sequi excepturi laborum, magni reiciendis fugit facere et nihil
              dolores aut maiores hic ratione iste officiis at recusandae
              doloremque cumque minima?
            </p>
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
