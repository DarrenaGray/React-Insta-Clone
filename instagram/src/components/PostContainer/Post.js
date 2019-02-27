import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div className="post">
            <div className="post-info">
                <img src={props.data.thumbnailUrl} alt={props.data.thumbnailUrl}/>
                <p>{props.data.username}</p>
            </div>
            <img src={props.data.imageUrl} alt={props.data.imageUrl} />
            <CommentSection 
                comments={props.data.comments}
                likes={props.data.likes}
            />
        </div>
    )
}

export default Post;