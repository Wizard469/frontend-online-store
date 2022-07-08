import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // categories: [],
      queryValue: '',
      search: [],
    };
  }

  // componentDidMount() {
  //   this.setCategories();
  // }

    setSearch = async (categories, query) => {
      const search = await getProductsFromCategoryAndQuery(categories, query);
      this.setState({
        search: search.results,
      });
    }

    // setCategories = async () => {
    //   const categories = await getCategories();
    //   this.setState({
    //     categories,
    //   });
    // }

    onChange = ({ target }) => {
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
    }

    onClick= async () => {
      const { queryValue } = this.state;
      await this.setSearch('', queryValue);
      console.log('ok');
      // });
    }

    render() {
      const { queryValue, search } = this.state;
      return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route
                path="/"
                render={ () => (<Home
                  onChange={ this.onChange }
                  search={ search }
                  onClick={ this.onClick }
                  queryValue={ queryValue }
                  exact
                />) }
              />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
}
// projeto
export default App;
