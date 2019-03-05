import React from 'react'

import * as Icon from 'react-feather';
import {Form, FormGroup} from 'reactstrap';
// import './CommentSection.css';

import styled from 'styled-components';

// Syntax for styled components

class CommentSection extends React.Component {
    constructor(props) {
        super(props); 
           this.state = {
               comments: props.comments,
               likes: props.likes,
               comment: ''
           };
        }
    
        
    addNewComment = e => {
        e.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments,
                {
                    text: this.state.comment,
                    username: 'Groucho Marx'
                }
            ],
            comment: ''
        });
    }

    handleChanges = e => {
        this.setState({
            comment: e.target.value
        })
    }

    increasLikes = () => {
        this.setState ({
            likes: this.state.likes +1
        });
    }

    render(){
        return (
        <CommentContainer>
            <CommentsAndLikes>
                <Icon.Heart 
                    className='icons'
                    onClick={this.increasLikes}
                    />
                <Icon.MessageCircle className='icons' />
                <Likes>{this.state.likes} likes</Likes>
            </CommentsAndLikes>
            {this.state.comments.map((comment, i) => {
                return (
                    <CommentContent key={i}>
                        <UserNameComment>{comment.username}</UserNameComment>
                        <CommentText>{comment.text}</CommentText>
                    </CommentContent>
                )
                })}
                <Form onSubmit={this.addNewComment}>
                    <FormGroup>
                        <Input 
                            name="content"
                            placeholder="Add a comment..."
                            value={this.state.comment}
                            onChange={this.handleChanges}
                        />
                    </FormGroup>
                </Form>
        </CommentContainer>
    )
    }

// Syntax for CSS styled components

// class CommentSection extends React.Component {
//     constructor(props) {
//         super(props); 
//            this.state = {
//                comments: props.comments,
//                likes: props.likes,
//                comment: ''
//            };
//         }
    
        
//     addNewComment = e => {
//         e.preventDefault();
//         this.setState({
//             comments: [
//                 ...this.state.comments,
//                 {
//                     text: this.state.comment,
//                     username: 'Groucho Marx'
//                 }
//             ],
//             comment: ''
//         });
//     }

//     handleChanges = e => {
//         this.setState({
//             comment: e.target.value
//         })
//     }

//     increasLikes = () => {
//         this.setState ({
//             likes: this.state.likes +1
//         });
//     }

//     render(){
//         return (
//         <div className="commentSection">
//             <div className="commentsAndLikes">
//                 <Icon.Heart 
//                     className='icons'
//                     onClick={this.increasLikes}
//                     />
//                 <Icon.MessageCircle className='icons' />
//                 <p>{this.state.likes} likes</p>
//              </div>
//             {this.state.comments.map((comment, i) => {
//                 return (
//                     <div className="commentContent" key={i}>
//                         <p className="userName">{comment.username}</p>
//                         <p>{comment.text}</p>
//                     </div>
//                 )
//                 })}
//                 <Form onSubmit={this.addNewComment}>
//                     <Input 
//                         name="content"
//                         placeholder="Add a comment..."
//                         value={this.state.comment}
//                         onChange={this.handleChanges}
//                     />
//                 </Form>
//         </div>
//     )
//     }
}

// Styled components

const CommentContainer = styled.div`
    border-top: none;
    margin: 10px 15px 0 15px;
    font-size: 15px;
`

const CommentsAndLikes = styled.div`
    text-align: left;
    margin: 10px 0;
`

const CommentContent = styled.div`
    display: flex;
    margin: 15px 0;
`

const Likes = styled.p`
    margin: 10px 0;
    font-weight: 700;
`

const UserNameComment = styled.p`
    font-weight: 700;
    margin-right: 10px;
`

const CommentText = styled.p`

`
const Input = styled.input`
    border: 1px solid lightgray;
    border-bottom: none;
    border-left: none;
    border-right: none;
    width: 100%;
    margin: 10px auto 0 auto;
    outline: none;
    line-height: 50px
`

export default CommentSection;