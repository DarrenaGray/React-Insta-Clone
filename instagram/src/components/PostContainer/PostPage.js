import React from 'react';

import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

import styled from 'styled-components';

class PostPage extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
          dummyData: [],
          searchData: []
        };
      }
    
      componentDidMount() {
        console.log('CDM');
        this.setState({
          dummyData: dummyData
        });
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

      logOut = e => {
        e.preventDefault();
        localStorage.removeItem('user');
        window.location.reload();
    }
    
      render() {
        return (
          <div className="App">
            <SearchBar 
              searchPosts={this.searchBarHandler}/>
            <PostContainer 
              postData={
                this.state.searchData.length > 0 ?
                this.state.searchData :
                this.state.dummyData
              }
            />
            <Button type="submit" onClick={this.logOut}>Logout</Button>
          </div>
        );
      }
}

// Styled Components 

// Create Styles/Reusable directory and add for reusability 

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #3897f0;
  padding: 10px 20px;
  margin: 0 auto;
  width: 190px;
  color: white;
  font-weight: 700;
`

export default PostPage;