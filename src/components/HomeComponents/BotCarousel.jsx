import Carousel from "react-bootstrap/Carousel";
import bgImg from "../../assests/bgImg.jpg";

function CarouselFadeExample() {
  return (
    <Carousel fade style={{ maxHeight: "600px" }}>
      <Carousel.Item interval={2000} style={{ width: "300px" }}>
        <img
          src={bgImg}
          alt="First slide"
          className="d-block w-100"
          style={{ maxHeight: "600px" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{ width: "300px" }}>
        <img
          src={bgImg}
          alt="Second slide"
          className="d-block w-100"
          style={{ maxHeight: "600px" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{ width: "300px" }}>
        <img
          src={bgImg}
          alt="Third slide"
          className="d-block w-100"
          style={{ maxHeight: "600px" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
