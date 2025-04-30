// features/posts/CreatePost.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (title && content && author) {
      dispatch(postAdded(title, content, author));
      setTitle('');
      setContent('');
    }
  };

  return (
    <section>
      <h2>Create Post</h2>
      <form>
        <label htmlFor="postTitle">Title:</label>
        <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} />

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="">Select Author</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />

        <button type="button" onClick={onSubmit}>Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
