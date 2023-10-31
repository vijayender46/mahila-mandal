import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementLikes, addComment } from '../../redux/features/likesAndCommentsSlice';


const Card = () => {
  const likes = useSelector((state) => state.likesAndComments.likes);
  const comments = useSelector((state) => state.likesAndComments.comments);
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState('');

  const handleLikeClick = () => {
    dispatch(incrementLikes());
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim() !== '') {
      dispatch(addComment(commentInput));
      setCommentInput('');
    }
  };

  return (
    <div className="card">
      <h2>Card Title</h2>
      <p>Likes: {likes}</p>
      <button onClick={handleLikeClick}>Like</button>
      <div>
        <h3>Comments</h3>
        {comments?.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        )}
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Card;
