import React, { Component } from 'react'
import Header from './Header';
import SearchList from './SearchList';

import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';

class App extends Component {
  state = { message: 'Hello, React!!!' }
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Route path="/" exact={true}  component={Home} />
          <Route path="/movies" component={SearchList} />
        </div>/

      </div>
      </BrowserRouter>
    );
  }
}

export default App;