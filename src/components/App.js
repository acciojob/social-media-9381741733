
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsList from "./features/posts/PostsList";
import CreatePost from "./features/posts/CreatePost";
import EditPost from "./features/posts/EditPost";
import SinglePostPage from "./features/posts/SinglePostPage";
import UsersPage from "./features/users/UsersPage";
import UserPosts from "./features/users/UserPosts";
import NotificationsList from "./features/notifications/NotificationsList";

const App = () => {
  return (
    <div className="App">
      <h1>GenZ</h1>
      <nav>
        <a href="/">Posts</a> |{" "}
        <a href="/users">Users</a> |{" "}
        <a href="/notifications">Notifications</a>
      </nav>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:postId" element={<SinglePostPage />} />
        <Route path="/editPost/:postId" element={<EditPost />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserPosts />} />
        <Route path="/notifications" element={<NotificationsList />} />
      </Routes>
    </div>
  );
};

export default App;
