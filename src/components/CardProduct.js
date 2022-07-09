import React from 'react';
import PropTypes from 'prop-types';

class CardProduct extends React.Component {
  render() {
    const { addItemsCart, title, thumbnail, price, id } = this.props;

    return (
      <>
        <h2>{title}</h2>
        <img src={ thumbnail } alt={ title } />
        <h3>{price}</h3>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ addItemsCart }
          id={ id }
        >
          Adicionar ao Carrinho

        </button>
      </>
    );
  }
}

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addItemsCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardProduct;
