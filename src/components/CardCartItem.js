import React from 'react';
import { string, number } from 'prop-types';

class CardCartItem extends React.Component {
  render() {
    const { title, thumbnail, price, quantity } = this.props;
    return (
      <div>
        <h2 data-testid="shopping-cart-product-name">{title}</h2>
        <img src={ thumbnail } alt={ title } />
        <h3>{price}</h3>
        <div className="button-quantity">
          <button type="button"> - </button>
          <p data-testid="shopping-cart-product-quantity">{quantity}</p>
          <button type="button"> + </button>
        </div>
      </div>
    );
  }
}

CardCartItem.propTypes = {
  title: string,
  thumbnail: string,
  price: number,
  quantity: number,
}.isRequired;

export default CardCartItem;
