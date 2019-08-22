import React, { Component } from 'react';
import ArticleAdd from './ArticleAdd';
import ArticleList from './ArticleList';
import ArticleInfo from './ArticleInfo';
import ArticleEdit from './ArticleEdit';
import {Router, Route, NavLink, Switch} from 'react-router-dom'
import history from '../history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Navigation />
          <Main />
        </div>
      </Router>
    );
  }
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/contact">Users</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/contact/new">Add User</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={ArticleList} />
    <Route exact path="/contact" component={ArticleList} />
    <Route exact path="/contact/new" component={ArticleAdd} />
    <Route exact path="/contact/:id" component={ArticleEdit} />
  </Switch>
);

export default App;
//<Route exact path="/contact/:id" component={ArticleInfo} />