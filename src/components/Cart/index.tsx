import React from 'react'
import { CartItemType } from '../../App'
import CartItem from '../CartItem';

import { Wrapper } from './Cart.styles'

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (products: CartItemType[]) =>
    products.reduce((ack: number, products ) => ack + products.amount * products.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Products in cart.</p> : null}
      {cartItems.map(product => (
        <CartItem 
        key={product.id}
        item={product}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  ) 
}

export default Cart