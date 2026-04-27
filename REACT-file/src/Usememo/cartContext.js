// cartContext.js
export const cartInitialState = { items: [], totalPrice: 0 };
export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItems = [...state.items, action.payload];
      return { items: newItems, totalPrice: newItems.reduce((sum, item) => sum + item.price, 0) };
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter((_, i) => i !== action.payload);
      return { items: newItems, totalPrice: newItems.reduce((sum, item) => sum + item.price, 0) };
    }
    case 'CLEAR_CART': return { items: [], totalPrice: 0 };
    default: return state;
  }
};
