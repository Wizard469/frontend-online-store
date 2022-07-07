import React from 'react';
import CardProduct from './components/CardProduct';

class Home extends React.Component {
  render() {
    const { search, queryValue, onChange, onClick } = this.props;
    console.log(search);
    return (
      <div>
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
                title={ product.title }
                thumbnail={ product.thumbnail }
                price={ product.price }
              />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Home;
