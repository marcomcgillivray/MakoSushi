import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state
const initialState = {
  cartItems: [],
  cartTotal: 0,
};

// Create the CartContext
const CartContext = createContext();

// Create a reducer function to manage state updates
// CartContext.js

// ...

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        total: action.payload.price,
      };
      const updatedCartItems = [...state.cartItems, newItem];
      const updatedCartTotal = state.cartTotal + action.payload.price;
      return { ...state, cartItems: updatedCartItems, cartTotal: updatedCartTotal };
    
    case 'REMOVE_FROM_CART':
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        const removedItem = state.cartItems[itemIndex];
        const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        const updatedCartTotal = state.cartTotal - removedItem.total;
        return { ...state, cartItems: updatedCartItems, cartTotal: updatedCartTotal };
      }
      return state; // Item not found in the cart, no change

    // Add other cases for clearing cart, updating quantities, etc. if needed
    default:
      return state;
  }
};

// ...


// Create a CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};