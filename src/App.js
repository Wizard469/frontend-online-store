import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import { getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryValue: '',
      search: [],
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

    onClick= async () => {
      const { queryValue } = this.state;
      await this.setSearch('', queryValue);
    }

    render() {
      const { queryValue, search } = this.state;
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
                />) }
              />
            </Switch>
            <Route path="/cart" component={ Cart } />
          </BrowserRouter>
        </div>
      );
    }
}
export default App;
