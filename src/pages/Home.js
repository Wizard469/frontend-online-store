import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CategoriesMenu from '../components/CategoriesMenu';

class Home extends React.Component {
  render() {
    const { queryValue, onChange } = this.props;
    return (
      <div>
        <CategoriesMenu />
        <input
          type="text"
          name="queryValue"
          value={ queryValue }
          onChange={ onChange }
        />
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

Home.propTypes = {
  queryValue: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Home;
