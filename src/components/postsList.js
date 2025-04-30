// features/posts/PostsList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CreatePost from './CreatePost';

const PostsList = () => {
  const posts = useSelector(state => state.posts);
  return (
    <section>
      <CreatePost />
      <div className="posts-list">
        {posts.map((post, index) => (
          <article key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={`/posts/${post.id}`}><button className="button">View Post</button></Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PostsList;
