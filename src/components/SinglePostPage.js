// features/posts/SinglePostPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

const SinglePostPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.posts.find(post => post.id === postId));

  if (!post) return <p>Post not found!</p>;

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji], index) => (
    <button
      key={name}
      type="button"
      onClick={() => dispatch(reactionAdded({ postId, reaction: name }))}
      disabled={name === 'eyes'}
    >
      {emoji} {post.reactions[name]}
    </button>
  ));

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>{reactionButtons}</div>
      <Link to={`/editPost/${post.id}`}><button className="button">Edit</button></Link>
    </article>
  );
};

export default SinglePostPage;
