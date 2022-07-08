import React from 'react';
import PropTypes from 'prop-types';

class CardProduct extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <>
        <h2>{title}</h2>
        <img src={ thumbnail } alt={ title } />
        <h3>{price}</h3>
      </>
    );
  }
}

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardProduct;
