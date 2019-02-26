import React from 'react';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchContainer';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;
