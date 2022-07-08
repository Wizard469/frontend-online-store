import React from 'react';
import PropTypes from 'prop-types';
import CardCartItem from '../components/CardCartItem';

class Cart extends React.Component {
  render() {
    const { productsCart } = this.props;
    if (productsCart.length === 0) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }
    return (
      <div>
        {productsCart.map((item) => (<CardCartItem
          key={ item.id }
          title={ item.title }
          price={ item.price }
          thumbnail={ item.thumbnail }
          quantity={ item.quantity }
        />))}
      </div>
    );
  }
}

Cart.propTypes = {
  productsCart: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Cart;
