import { Container } from "react-bootstrap";

function NotFound() {
  return (
    <Container
      style={{ height: "30vh" }}
      className="d-flex align-items-center flex-column justify-content-center"
    >
      <h2>Something gone wrong!</h2>
      <p>Product not found!</p>
    </Container>
  );
}
export default NotFound;
