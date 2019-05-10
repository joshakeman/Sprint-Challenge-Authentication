import React from 'react';
import axios from 'axios';


axios.interceptors.request.use(
  function(requestConfig) {
    requestConfig.headers.authorization = localStorage.getItem('jwt');

    return requestConfig;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem('jwt');
      const notLoggedIn = <h3>Please login to see the users</h3>;

      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  }}