import React from 'react';

import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

class PostPage extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
          dummyData: [],
          searchData: []
        };
      }
    
      componentDidMount() {
        console.log('Mounted');
        this.setState({
          dummyData: dummyData
        })
      }
    
      // Filters the search to return values entered into the searchbar
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
          </div>
        );
      }
}

export default PostPage;