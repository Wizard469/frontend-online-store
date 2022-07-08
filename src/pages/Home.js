import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardProduct from '../components/CardProduct';
import CategoriesMenu from '../components/CategoriesMenu';

class Home extends React.Component {
  render() {
    const { search,
      queryValue,
      onChange,
      onClick,
      addItemsCart,
      setCategories } = this.props;
    return (
      <div>
        <CategoriesMenu setCategories={ setCategories } />
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <input
          data-testid="query-input"
          type="text"
          name="queryValue"
          value={ queryValue }
          onChange={ onChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ onClick }
        >
          pesquisar
        </button>
        {search.length === 0 ? (
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) : (
          search.map((product) => (
            <div
              key={ product.id }
              data-testid="product"
            >
              <CardProduct
                addItemsCart={ addItemsCart }
                title={ product.title }
                thumbnail={ product.thumbnail }
                price={ product.price }
                id={ product.id }
              />
            </div>
          ))
        )}
      </div>
    );
  }
}

Home.propTypes = {
  search: PropTypes.arrayOf([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ]).isRequired,
  queryValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  setCategories: PropTypes.func.isRequired,
  addItemsCart: PropTypes.func.isRequired,
};

export default Home;
