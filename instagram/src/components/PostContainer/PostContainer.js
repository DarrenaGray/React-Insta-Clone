import React from 'react';
import Post from '../PostContainer/Post';
import PropTypes from 'prop-types';
// import './PostContainer.css';



const PostContainer = props => {
    return (
        <div>
            {props.postData.map((data, i) => {
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
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
        })
    )
};

PostContainer.defaultProps ={
    dummydata: []
};



export default PostContainer;