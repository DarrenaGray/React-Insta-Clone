import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
// import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login';

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
    const posts = this.state.dummyData.filter( post => {
      if(post.username.includes(e.target.value)) {
        return post
      } else {
        return null
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
        {/* <PostPage /> */}
        <Login />
      </div>
    );
  }
}

export default App;
