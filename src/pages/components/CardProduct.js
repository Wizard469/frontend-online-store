import React from 'react';

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

export default CardProduct;
