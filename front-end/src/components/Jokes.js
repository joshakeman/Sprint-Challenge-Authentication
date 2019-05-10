import React from 'react';
import axios from 'axios';

import requiresAuth from './requiresAuth'

class Jokes extends React.Component {
  state = {
    jokes: [],
  };

  render() {
    return (
      <>
        <h2>Jokes</h2>
        <ul>
          {this.state.jokes.map(j => (
            <div key={j.id}> {j.joke} </div>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const endpoint = 'http://localhost:3300/api/jokes';

    axios
      .get(endpoint)
      .then(res => {
        console.log(res.data)
        this.setState({ jokes: res.data });
      })
      .catch(err => console.error(err));
  }
}

export default requiresAuth(Jokes);