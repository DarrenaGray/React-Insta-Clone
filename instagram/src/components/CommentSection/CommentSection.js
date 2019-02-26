import React from 'react'
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div className="comments">
            {props.data.comments.map(data => {
                return (
                    <div className="comment-content">
                        <p>{data.username}:</p>
                        <p>{data.text}</p>
                    </div>
                )
                })}
        </div>
    )
    }

// PropTypes

CommentSection.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;