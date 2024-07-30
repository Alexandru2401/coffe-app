import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "../api/api";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function CarouselProducts() {
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
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          partialVisbile={false}
        >
          {data.slice(5, 25).map((data) => (
            <Link to="/products" className="product-link">
              <div key={data._id} className="product-container">
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
          <Button variant="danger">Order now!</Button>
        </Link>
      </Row>
    </Container>
  );
}
