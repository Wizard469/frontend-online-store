import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getItemById } from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultObj: {},
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

    fetchDetails = async () => {
      const { match: { params: { id } } } = this.props;
      const info = await getItemById(id);
      const details = info;

      const resultObj = {
        name: details.title,
        price: details.price,
        img: details.thumbnail,
      };
      this.setState({
        resultObj,
      });
    }

    render() {
      const { resultObj } = this.state;
      return (
        <>
          <h1 data-testid="product-detail-name">
            { resultObj.name }
          </h1>
          <img src={ resultObj.img } alt={ resultObj.name } />
          <h2>
            Preco:
            R$
            {resultObj.price}
          </h2>
          <Link to="/cart" data-testid="shopping-cart-button">
            <button type="button">Voltar ao Carrinho</button>
          </Link>
        </>
      );
    }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
