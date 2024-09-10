import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
import { FavoriteContext } from "../../store/favoriteStore/context";
import { addToFavorites } from "../../store/favoriteStore/actions";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProductCard({ name, image, description, id }) {
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

  // const { dispacthCart } = useContext(CartContext);
  function handleAddToCart() {}
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
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
            style={{
              color: isFavorited ? "red" : "inherit",
              cursor: "pointer",
            }}
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
              Product was added to favourite!
            </div>
          )}
          <Button onClick={handleAddToCart}>Add to cart</Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
