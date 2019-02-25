import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

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

export default PostContainer;