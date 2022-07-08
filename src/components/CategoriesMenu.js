import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoriesMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      catObj: [],
    };
  }

  componentDidMount() {
    this.handleDataApi();
  }

    handleDataApi = async () => {
      const categories = await getCategories();
      this.setState({
        catObj: categories,
      });
    }

    render() {
      const { catObj } = this.state;
      const { setCategories } = this.props;

      return (
        <>
          {
            catObj.map(({ name, id }) => (
              <button
                type="button"
                data-testid="category"
                key={ id }
                id={ id }
                onClick={ setCategories }
              >
                {name}
              </button>))
          }
        </>
      );
    }
}
CategoriesMenu.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default CategoriesMenu;
