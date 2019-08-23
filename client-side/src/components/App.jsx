import React, { Component } from 'react';
import ArticleAdd from './ArticleAdd';
import ArticleList from './ArticleList';
// import ArticleInfo from './ArticleInfo';
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

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Internship</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Topics<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Lessons</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                        Users
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbar DropdownMenuLink">
                        <NavLink exact className="dropdown-item" activeClassName="active" to="/contact">Users</NavLink>
                        <NavLink exact className="dropdown-item" activeClassName="active" to="/contact/new">Add User</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={ArticleList} />
    <Route exact path="/contact" component={ArticleList} />
    <Route exact path="/contact/new" component={ArticleAdd} />
    <Route  path="/contact/:id" component={ArticleEdit} />
  </Switch>
);

export default App;
//<Route exact path="/contact/:id" component={ArticleInfo} />