import React from 'react';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      dummyData: [],
      searchData: []
    };
  }

  componentDidMount() {
    console.log('CMD');
    this.setState({
      dummyData: dummyData
    })
  }

  // searchBarHandler = e => {
  //   const posts = this.state.dummyData.filter( post => {
  //     if(post.username.includes(event.target.value)) {
  //       return post
  //     }
  //   });
  //   this.setState({
  //     searchData: posts
  //   })
  // }

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
