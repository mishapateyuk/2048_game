import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import React from 'react';
import Main from './Main';
import Footer from '../components/Footer';

const Game = () => (<div>IM GAME</div>);
const History = () => <div>IM HISTORY</div>;
const Leaders = () => <div>IM LEADERS</div>;
const Settings = () => <div>IM SETTINGS</div>;


class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="p-wrapper">
          <div className="container">
            <header className="p-header">
              <nav className="p-header-nav">
                <ul className="clearfix">
                  <NavLink exact to='/' className="nav-item" activeClassName="active-nav-item">
                    <li>Main</li>
                  </NavLink>
                  <NavLink to='/game' className="nav-item" activeClassName="active-nav-item">
                    <li>Game</li>
                  </NavLink>
                  <NavLink to='/history' className="nav-item" activeClassName="active-nav-item">
                    <li>History</li>
                  </NavLink>
                  <NavLink to='/leaders' className="nav-item" activeClassName="active-nav-item">
                    <li>Leaders</li>
                  </NavLink>
                  <NavLink to='/settings' className="nav-item float-right" activeClassName="active-nav-item">
                    <li>Settings</li>
                  </NavLink>
                </ul>
              </nav>
            </header>
            <main className="p-header">
              <Route exact path='/' component={Main} />
              <Route path='/game' component={Game} />
              <Route path='/history' component={History} />
              <Route path='/leaders' component={Leaders} />
              <Route path='/settings' component={Settings} />
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
