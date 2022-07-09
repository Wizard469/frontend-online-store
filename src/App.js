import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import { getItemById, getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryValue: '',
      search: [],
      productsCart: [],
    };
  }

    setSearch = async (categories, query) => {
      const search = await getProductsFromCategoryAndQuery(categories, query);
      this.setState({
        search: search.results,
      });
    }

    onChange = ({ target }) => {
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
    }

    setCategories = async ({ target }) => {
      await this.setSearch(target.id, '');
      console.log('ok');
    }

    onClick= async () => {
      const { queryValue } = this.state;
      await this.setSearch('', queryValue);
    }

    addItemsCart= async ({ target }) => {
      const product = await getItemById(target.id);
      const { title, price, thumbnail, id } = product;
      const { productsCart } = this.state;

      if (productsCart.some((item) => item.id === target.id)) {
        const obj = productsCart.reduce((acc, curr) => {
          if (curr.id === target.id) {
            curr.quantity += 1;

            return acc + curr;
          } return acc + curr;
        }, []);

        this.setState({
          productsCart: [...productsCart, obj],
        });
      } else {
        this.setState({
          productsCart: [...productsCart, {
            id,
            title,
            price,
            thumbnail,
            quantity: 1,
          }],
        });
      }
    }

    render() {
      const { queryValue, search, productsCart } = this.state;
      return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                render={ () => (<Home
                  onChange={ this.onChange }
                  search={ search }
                  onClick={ this.onClick }
                  queryValue={ queryValue }
                  setCategories={ this.setCategories }
                  addItemsCart={ this.addItemsCart }
                />) }
              />
              <Route
                path="/cart"
                render={ () => (
                  <Cart productsCart={ productsCart } />
                ) }
              />
              <Route
                path="/carddetails/:id"
                exact
                render={ (props) => <ProductDetails { ...props } /> }
              />
            </Switch>

          </BrowserRouter>
        </div>
      );
    }
}
export default App;
