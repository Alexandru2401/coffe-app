import React, { useContext } from "react";
import { FavoriteContext } from "../store/favoriteStore/context";
import { removeFromFavorites } from "../store/favoriteStore/actions";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Favourites() {
  const { id } = useParams();
  const { state, dispatch } = useContext(FavoriteContext);

  function handlePropertyRemove(productId) {
    const actionResult = removeFromFavorites(productId);
    dispatch(actionResult);
  }

  return (
    <div style={{ backgroundColor: "#FED8B1" }}>
      <Row>
        <Col className="d-flex">
          <h2 className="my-4 mx-auto">
            Favorite Products <FavoriteIcon />
          </h2>
        </Col>
      </Row>
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
    </div>
  );
}
