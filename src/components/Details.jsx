// Details.js
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { data } from "../api/api";

export default function Details() {
  let { id } = useParams();
  const foundProduct = data.find((product) => product._id === id);

  if (!foundProduct) {
    return <p>Product not found!</p>;
  }

  return (
    <Container>
      <Card key={id}>
        <Card.Title>{foundProduct.name}</Card.Title>
        <Card.Img variant="top" src={foundProduct.image} />
        <Card.Body>
          <Card.Text>{foundProduct.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
