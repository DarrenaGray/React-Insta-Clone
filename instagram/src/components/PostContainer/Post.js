import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
// import './PostContainer.css';

import styled from 'styled-components';

// Syntax for components styled with styled-components

const Post = props => {
    return (
        <PostContent>
            <PostInfo>
                <UserThumbnail src={props.data.thumbnailUrl} alt={props.data.thumbnailUrl} />
                <UserName>{props.data.username}</UserName>
            </PostInfo>
            <PostImage  src={props.data.imageUrl} alt={props.data.imageUrl} />
            <CommentSection 
                comments={props.data.comments}
                likes={props.data.likes}
            />
        </PostContent>
    )
}

// Syntax for CSS styled elements

// const Post = props => {
//     return (
//         <div className="post">
//             <div className="postInfo">
//                 <img className="userThumbnail" src={props.data.thumbnailUrl} alt={props.data.thumbnailUrl}/>
//                 <p>{props.data.username}</p>
//             </div>
//             <img className="postImage" src={props.data.imageUrl} alt={props.data.imageUrl} />
//             <CommentSection 
//                 comments={props.data.comments}
//                 likes={props.data.likes}
//             />
//         </div>
//     )
// }

// Styled Components

const PostContent = styled.div`
    text-align: left;
    max-width: 600px;
    margin: 60px 158px 15px 0 ;
    border: 1px solid lightgray;
`

const PostInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 15px;
`

const UserThumbnail = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 5px;
`

const UserName = styled.p`
    font-weight: 700;
`

const PostImage = styled.img`
    display: block;
    width: 100%;
`

export default Post;