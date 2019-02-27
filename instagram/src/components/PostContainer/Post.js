import React from 'react';

const Post = props => {
    return (
        <div clasName="post">
            <div className="post-info">
                <img src={props.data.thumbnailUrl}/>
                <p>{props.data.username}</p>
            </div>
        </div>
    )
}

export default Post;