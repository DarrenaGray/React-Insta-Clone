import React from 'react'
import PropTypes from 'prop-types';
// import * as Icon from 'react-feather';

class CommentSection extends React.Component {
    constructor(props) {
        super(props); 
           this.state = {
               comments: props.comments,
               likes: props.likes
           }
        }

    render(){
        return (
        <div className="comment-section">
            <div className="commentsAndLikes">
            {/* <Icon.Heart className='icons' /> */}
            </div>
             <p>{this.state.likes} likes</p>
            {this.state.comments.map((comment, i) => {
                return (
                    <div className="comment-content" key={i}>
                        <p>{comment.username}:</p>
                        <p>{comment.text}</p>
                    </div>
                )
                })}
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