import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className="postContainer">
            {props.dummyData.map(data => {
                return (
                <div className="dummyData" key={data.timestamp}>

                 <img src={data.thumbnailUrl} alt={data.username}/>
                 <img src={data.imageUrl} alt={data.imageUrl} />
                 <p>{data.likes} likes</p>
                 <p>{data.timestamp}</p>
                 {/* <p>{data.comments}</p> */}
                 <CommentSection 
                    key={data.timestamp}
                 />
                 </div>
                )
                })}
        </div>
    );
}

PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string
                })
            )
        })
    )
};

PostContainer.defaultProps ={
    dummydata: []
};

export default PostContainer;