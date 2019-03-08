import React from 'react';
import Post from '../PostContainer/Post';
import PropTypes from 'prop-types';
// import './PostContainer.css';



const PostContainer = props => {
    return (
        <div>
            {props.postData.map((data, i) => {
                console.log(data)
                return (
                    <div key={i}>
                        <Post data={data} key={i}/>
                    </div>
                )
                })}
        </div>
    );
}

// PropTypes

PostContainer.propTypes = {
    postData: PropTypes.array.isRequired
};

PostContainer.defaultProps ={
    dummydata: []
};



export default PostContainer;