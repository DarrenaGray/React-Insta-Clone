import React from 'react';
import Post from '../PostContainer/Post';
import PropTypes from 'prop-types';
import './PostContainer.css'

const PostContainer = props => {
    return (
        <div>
            {props.dummyData.map((data, i) => {
                return (
                    <div className="post-container" key={i}>
                        <Post data={data}/>
                        {/* Passed data below as props to Post component: */}
                        {/* <img src={data.thumbnailUrl} alt={data.username}/>
                        <p>{data.username}</p>
                        <img src={data.imageUrl} alt={data.imageUrl} />
                        <p>{data.likes} likes</p>
                        <p>{data.timestamp}</p> */}
                        {/* <CommentSection 
                            comments={data.comments}
                            likes={data.likes}
                        /> */}
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
            // comments: PropTypes.arrayOf(
            //     PropTypes.shape({
            //         username: PropTypes.string,
            //         text: PropTypes.string
            //     })
            // )
        })
    )
};

PostContainer.defaultProps ={
    dummydata: []
};

export default PostContainer;