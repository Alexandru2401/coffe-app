import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  const { name, image, description } = props;
  return (
    <Card style={{ width: "18rem", minHeight: "500px", overflow: "hidden" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link>
          <Button variant="primary">See details</Button>
        </Link>
        <Link className="mx-2">
          <Button variant="dark">Order now</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
