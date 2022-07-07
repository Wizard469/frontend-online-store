import React from 'react';
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

      return (
        <>
          {
            catObj.map(({ name, id }) => (
              <button
                type="button"
                data-testid="category"
                key={ id }
              >
                {name}
              </button>))
          }
        </>
      );
    }
}

export default CategoriesMenu;
