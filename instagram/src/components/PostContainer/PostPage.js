import React from 'react';

import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import Login from '../Login/Login';

class PostPage extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
          // showFirst: true,
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
            <Login />
            <SearchBar searchPosts={this.searchBarHandler}/>
            <PostContainer 
                postData={
                  this.state.searchData.length > 0 ?
                  this.state.searchData :
                  this.state.dummyData
                }
            />
          </div>
        );
      }
}

export default PostPage;