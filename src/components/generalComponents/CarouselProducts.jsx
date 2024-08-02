import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "../../api/api";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function CarouselProducts() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <Container
        className="my-4 py-4 d-flex align-items-center justify-content-center flex-column"
        style={{ backgroundColor: "#ECB176", borderRadius: "5px" }}
      >
        <Row className="my-3">
          <h2>Choose from a wide variety of products</h2>
        </Row>

        <Row className="mb-4 w-100 my-3">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            autoPlay={false}
            infinite={false}
            autoPlaySpeed={2500}
            keyBoardControl={true}
            containerClass="carousel-container"
            customTransition="all 1s ease-in-out"
            transitionDuration={1000}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            partialVisbile={false}
          >
            {data.slice(5, 25).map((data) => (
              <Link key={data._id} to="/products" className="product-link">
                <div className="product-container">
                  <h2 style={{ fontSize: "20px", color: "#6F4E37" }}>
                    {data.name}
                  </h2>
                  <img src={data.image} style={{ width: "300px" }} />
                </div>
              </Link>
            ))}
          </Carousel>
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
