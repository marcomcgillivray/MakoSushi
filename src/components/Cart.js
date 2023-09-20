// CartDisplay.js
import React from 'react';
import { useCart } from '../CartContext';

function CartDisplay() {
  const { state, dispatch } = useCart();

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item});
  }
  

  return (
    <div className='cart'>
      <ul>
        {state.cartItems.map((item, index) => (
          <li key={index} className='list-item'>
            
            <div className='item'>
            
                {item.name}
            </div>
            <div className='item'> 
                ${item.price}
            </div> 
            <button
            className='remove-button' onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p><strong>Total: ${state.cartTotal}</strong></p>
      <br>
      </br>
      <button className='button-solid'>
        Checkout
      </button>
    </div>
  );
}

export default CartDisplay;
