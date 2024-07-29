import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
import { FavoriteContext } from "../store/context";
import { addToFavorites } from "../store/actions";
import { useState } from "react";
export default function ProductCard(props) {
  const { name, image, description, id } = props;
  const { dispatch } = useContext(FavoriteContext);
  const [showNotification, setNotification] = useState(false);
  const [isFavorited, setFavorited] = useState(false);
  function handleAddToFavorite(product) {
    const favoriteAction = addToFavorites(product);
    dispatch(favoriteAction);
    setFavorited(true);
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  }
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

        <FavoriteIcon
          style={{ color: isFavorited ? "red" : "inherit", cursor: "pointer" }}
          onClick={() => {
            handleAddToFavorite({
              id: id,
              image: image,
              title: name,
            });
          }}
        />
        {showNotification && (
          <div className="property-notification">
            Property was added to favourite!
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
