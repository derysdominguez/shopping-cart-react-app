import React from 'react'
import { CartItemType } from '../../App';

import Button from '@material-ui/core/Button';
import { Wrapper } from './Product.style';
import CartItem from '../CartItem/index';

type Props = {
  product: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Product: React.FC<Props> = ({ product, handleAddToCart }) => (
  <Wrapper>
    <img src={product.image} alt={product.title} />
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
  </Wrapper>
);

export default Product