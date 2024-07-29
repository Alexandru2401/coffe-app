export const initialFavorite = { products: [] };

export function favoriteReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITE": {
      const foundProduct = state.products.find((product) => {
        return product.id === action.payload.id;
      });
      if (foundProduct) {
        return state;
      } else {
        return {
          products: [...state.products, action.payload],
        };
      }
    }
    case "REMOVE_FROM_FAVORITE": {
      const filteredProducts = state.products.filter((product) => {
        return product.id !== action.payload;
      });
      const newState = {
        products: filteredProducts,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
