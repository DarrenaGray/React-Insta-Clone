import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PostPage from './components/PostContainer/PostPage';

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

  searchBarHandler = e => {
    // Figure out how to fix the warning below:
    // './src/App.js
    // Line 31:  Expected to return a value at the end of arrow function  array-callback-return'
    
    // eslint-disable-next-line 
    const posts = this.state.dummyData.filter( post => {
      if(post.username.includes(e.target.value)) {
        return post
      }
    });
    this.setState({
      searchData: posts
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchBarHandler}/>
        <PostContainer 
            postData={
              this.state.searchData.length > 0 ?
              this.state.searchData :
              this.state.dummyData
            }
        />
        <PostPage />
      </div>
    );
  }
}

export default App;
