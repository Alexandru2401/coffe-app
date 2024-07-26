import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductCard(props) {
  const { name, image, description } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
