export function addToFavorites(product) {
  return {
    type: "ADD_TO_FAVORITE",
    payload: product,
  };
}

export function removeFromFavorites(productId) {
  return {
    type: "REMOVE_FROM_FAVORITE",
    payload: productId,
  };
}
