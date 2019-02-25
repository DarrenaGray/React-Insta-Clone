import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {
    render() {
    return (
        <div className="postContainer">
            {this.props.dummyData.map(data => {
                return (
                <div className="dummyData" key={data.timestamp}>

                 <img src={data.thumbnailUrl} alt={data.username}/>
                 <img src={data.imageUrl} alt={data.imageUrl} />
                 <p>{data.likes} likes</p>
                 <p>{data.timestamp}</p>
                 {data.comments.map(info => (
                     <div>
                     <p>{info.username}</p>
                     <p>{info.text}</p>
                     </div>
                 ))}
                 <CommentSection 
                    key={data.timestamp}
                    dummyData={this.props.dummyData}
                 />
                 </div>
                )
                })};
        </div>
    );
}

}

// PropTypes

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