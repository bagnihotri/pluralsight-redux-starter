import React from 'react';
import { Link } from 'react-router';

export class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Admin</h1>
        <p>Magic of React Router and ES6</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}