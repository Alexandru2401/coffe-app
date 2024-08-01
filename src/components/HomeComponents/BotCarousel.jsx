import Carousel from "react-bootstrap/Carousel";
import { data } from "../../api/api";
function CarouselFadeExample() {
  
  return (
    <Carousel fade style={{ maxHeight: "600px" }} className="mb-4">
      <Carousel.Item interval={3000} style={{ maxWidth: "600px" }}>
        <img
          src={data[0].image}
          alt="First slide"
          className="d-block w-100"
          style={{ maxHeight: "600px" }}
        />
        <Carousel.Caption>
          <h3>Hot Beverages</h3>
          <p>Perfect for early mornings!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ maxWidth: "600px" }}>
        <img
          src={data[10].image}
          alt="Second slide"
          className="d-block w-100"
          style={{ maxHeight: "600px" }}
        />
        <Carousel.Caption>
          <h3>Iced beverages</h3>
          <p>Refresh yourself with the coldest drinks!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ maxWidth: "600px" }}>
        <img
          src={data[22].image}
          alt="Third slide"
          className="d-block w-100"
          style={{ maxHeight: "600px" }}
        />
        <Carousel.Caption>
          <h3>Syrups</h3>
          <p>The best syrup combined with the best coffee!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;

