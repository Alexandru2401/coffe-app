// Details.js
import { Card, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { data } from "../api/api";
import Accordion from "react-bootstrap/Accordion";
import NotFound from "../pages/NotFoundPage";
import { Link } from "react-router-dom";
export default function Details() {
  let { id } = useParams();
  const foundProduct = data.find((product) => product._id === id);

  if (!foundProduct) {
    return <NotFound />;
  }

  return (
    <Container className="my-4 d-flex flex-column align-items-center">
      <h2 className="mb-3">Product details</h2>
      <Card key={id} style={{ backgroundColor: "#ECB176" }}>
        <Card.Img
          variant="top"
          src={foundProduct.image}
          style={{ maxWidth: "800px" }}
          className="mx-auto my-3"
        />
        <Card.Body style={{ maxWidth: "800px" }} className="mx-auto">
          <Card.Title>{foundProduct.name}</Card.Title>
          <Card.Text>{foundProduct.description}</Card.Text>
          <Card.Text style={{ fontWeight: "bold" }}>Ingredients:</Card.Text>
          <Accordion defaultActiveKey="0" className="my-4">
            {foundProduct.recipeIngredient.map((ingredient, index) => (
              <Accordion.Item eventKey={String(index)} key={index}>
                <Accordion.Header>Ingredient {index + 1}</Accordion.Header>
                <Accordion.Body>{ingredient}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <Link to="https://glovoapp.com" target="_blank">
            <Button variant="dark">Order now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}
