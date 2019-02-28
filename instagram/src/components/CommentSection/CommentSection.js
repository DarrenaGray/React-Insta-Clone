import React from 'react'
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import {Form, Input} from 'reactstrap';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props); 
           this.state = {
               comments: props.comments,
               likes: props.likes,
               comment: ''
           }
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
        })
    }

    handleChanges = e => {
        this.setState({
            comment: e.target.value
        })
    }

    render(){
        return (
        <div className="commentSection">
            <div className="commentsAndLikes">
                <Icon.Heart className='icons' />
                <Icon.MessageCircle className='icons' />
                <p>{this.state.likes} likes</p>
             </div>
            {this.state.comments.map((comment, i) => {
                return (
                    <div className="commentContent" key={i}>
                        <p className="userName">{comment.username}</p>
                        <p>{comment.text}</p>
                    </div>
                )
                })}
                <Form onSubmit={this.addNewComment}>
                    <Input 
                        name="content"
                        placeholder="Add a comment..."
                        value={this.state.comment}
                        onChange={this.handleChanges}
                    />
                </Form>
        </div>
    )
    }
}
// PropTypes

CommentSection.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;