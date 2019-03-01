import React from 'react';

import './App.css';
import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login';
import withAuthenticate from './components/Authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

class App extends React.Component {
  constructor () {
    super ();
    this.state = {};
    };

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
