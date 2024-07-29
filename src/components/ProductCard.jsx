import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function ProductCard(props) {
  const { name, image, description, id} = props;
  return (
    <Card style={{ width: "18rem", minHeight: "500px", overflow: "hidden" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/details/${id}`}>
          <Button variant="primary">See details</Button>
        </Link>
        <Link className="mx-2" to="https://glovoapp.com" target="_blank">
          <Button variant="dark">Order now</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
