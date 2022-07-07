import React from 'react';
import logo from './logo.svg';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

import './App.css';
// comecando mais
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],

    };
  }

  componentDidMount() {
    this.setCategories();
    this.handleSearch();
  }

  setCategories = async () => {
    const categories = await getCategories();

    this.setState({
      categories,
    });
  }

  handleSearch = async () => {
    const result = await getProductsFromCategoryAndQuery('', 'computador');
    return result;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>Edit src/App.js and save to reload.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
// projeto
export default App;
