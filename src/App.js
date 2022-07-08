import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';

// comecando mais
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // categories: [],
      queryValue: '',

    };
  }

  componentDidMount() {
    this.setCategories();
    this.handleSearch();
  }

  /* setCategories = async () => {
    const categories = await getCategories();

    this.setState({
      categories,
    });
  } */

  /* handleSearch = async (categories, query) => {
    const result = await getProductsFromCategoryAndQuery('', '');
    return result;
  } */

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { queryValue } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              render={ () => (<Home
                queryValue={ queryValue }
                onChange={ this.onChange }
              />) }
              exact
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
// projeto
export default App;
