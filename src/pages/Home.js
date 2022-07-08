import React from 'react';
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
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
