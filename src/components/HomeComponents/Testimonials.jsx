// import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
// import { testimonials } from "../../api/testimonials";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// export default function Testimonials() {
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.2,
//   });
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 1, // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 1, // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1, // optional, default to 1.
//     },
//   };
//   return (
//     <motion.div
//     ref={ref}
//     initial={{ opacity: 0, x: 100 }} 
//     animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
//     transition={{ duration: 0.6 }}
//   >
//     <Container
//       className="my-4 py-4 d-flex align-items-center justify-content-center flex-column"
//       style={{ backgroundColor: "#ECB176", borderRadius: "5px" }}
//     >
//       <Row className="my-3">
//         <h2>Our coffee is the best! We don't say that, our customers do!</h2>
//       </Row>

//       <Row className="mb-4 w-100 my-3">
//         <Carousel
//           swipeable={true}
//           draggable={true}
//           showDots={false}
//           responsive={responsive}
//           ssr={true}
//           autoPlay={false}
//           infinite={false}
//           autoPlaySpeed={2500}
//           keyBoardControl={true}
//           containerClass="carousel-container"
//           customTransition="all 1s ease-in-out"
//           transitionDuration={1000}
//           dotListClass="custom-dot-list-style"
//           itemClass="carousel-item-padding-40-px"
//           partialVisbile={false}
//         >
//           {testimonials.map((testimonials) => (
//             <Card key={testimonials.id} style={{ width: "20rem" }} className="m-3">
//               <Card.Img src={testimonials.imgSrc} alt="img"/>
//               <Card.Body style={{ backgroundColor: "#102C57", color:"#ECB176"}}>
//                 <Card.Text style={{ fontSize: "20px"}}>
//                   {testimonials.description}
//                 </Card.Text>
//                 <Card.Text>
//                   {testimonials.rating}
//                   <StarIcon />
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           ))}
//         </Carousel>
//       </Row>
//       <Row className="my-3">
//         <Link to="/products">
//           <Button variant="dark">Order now!</Button>
//         </Link>
//       </Row>
//     </Container>
//     </motion.div>
//   );
// }

export default function Testimonials() {
  return <div>Testimonials</div>
}