import React, { useContext } from "react";
import { FavoriteContext } from "../store/context";
import { removeFromFavorites } from "../store/actions";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Favourites() {
  const { id } = useParams();
  const { state, dispatch } = useContext(FavoriteContext);

  function handlePropertyRemove(productId) {
    const actionResult = removeFromFavorites(productId);
    dispatch(actionResult);
  }
  return (
    <div>
      {state.products.length === 0 ? (
        <p>No favourite products</p>
      ) : (
        state.products.map((product) => {
          return (
            <Container key={product.id}>
              <img src={product.image} style={{width:"400px"}}/>
              <h2>{product.title}</h2>
              <button
                onClick={() => {
                  handlePropertyRemove(product.id);
                }}
                className="delete-button"
              >
                Delete
              </button>
            </Container>
          );
        })
      )}
    </div>
  );
}
