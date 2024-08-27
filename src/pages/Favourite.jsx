import React, { useContext } from "react";
import { FavoriteContext } from "../store/context";
import { removeFromFavorites } from "../store/actions";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Favourites() {
  const { id } = useParams();
  const { state, dispatch } = useContext(FavoriteContext);

  function handlePropertyRemove(productId) {
    const actionResult = removeFromFavorites(productId);
    dispatch(actionResult);
  }
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div style={{ backgroundColor: "#FED8B1" }}>
      <Row>
        <Col className="d-flex">
          <h2 className="my-4 mx-auto">
            Favorite Products <FavoriteIcon />
          </h2>
        </Col>
      </Row>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <Container
          className="d-flex align-items-center justify-content-center flex-wrap py-4"
          style={{ backgroundColor: "#FED8B1" }}
        >
          {state.products.length === 0 ? (
            <Row className="d-flex align-items-center flex-1">
              <p>You don't have any favorite products!</p>
            </Row>
          ) : (
            state.products.map((product) => {
              return (
                <Card
                  key={product.id}
                  style={{
                    width: "18rem",
                  }}
                  className="m-2"
                >
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Button
                      onClick={() => {
                        handlePropertyRemove(product.id);
                      }}
                      variant="danger"
                    >
                      Delete
                    </Button>
                    <Link
                      className="mx-2"
                      to="https://glovoapp.com"
                      target="_blank"
                    >
                      <Button variant="dark">Order now!</Button>
                    </Link>
                  </Card.Body>
                </Card>
              );
            })
          )}
        </Container>
      </motion.div>
    </div>
  );
}
