import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "../api/api";
export default function CarouselPage() {
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
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      containerClass="carousel-container"
      customTransition="all 1s ease-in-out"
      transitionDuration={1000}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {data.map((data) => (
        <div key={data._id}>
          <h2>{data.name}</h2>
          <img src={data.image} style={{width:"300px"}}/>
        </div>
      ))}
    </Carousel>
  );
}
