import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Idcomponent = match => <strong>I AM PAGE WITH ID: {match.match.params.id}</strong>;

class MyVeryFirstReactElement extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to='/'>HOME</Link>
            <br />
            <Link to='/link/1'>The id is 1</Link>
            <br />
            <Link to='/link/2'>The id is 2</Link>
            <br />
            <Link to='/link/3'>The id is 3</Link>
          </div>
          <Route path='/link/:id' component={Idcomponent} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <MyVeryFirstReactElement />,
  document.getElementById('root')
);
