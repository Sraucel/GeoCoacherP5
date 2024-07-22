import React, { useState } from 'react';
import './forums.css'; // Make sure you have a CSS file for styling

const Forums = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [replyContent, setReplyContent] = useState({});
  const [currentPostId, setCurrentPostId] = useState(null);

  // Handle adding a new post
  const addPost = () => {
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        content: newPost,
        replies: []
      };
      setPosts([...posts, post]);
      setNewPost('');
    }
  };

  // Handle deleting a post
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  // Handle adding a reply
  const addReply = (postId) => {
    if (replyContent[postId]?.trim()) {
      const updatedPosts = posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            replies: [...post.replies, replyContent[postId]]
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      setReplyContent({ ...replyContent, [postId]: '' });
      setCurrentPostId(null);
    }
  };

  return (
    <div className="forums">
      <h1>Forums</h1>
      
      <div className="post-form">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write a new post..."
        />
        <button onClick={addPost}>Post</button>
      </div>

      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            <button onClick={() => deletePost(post.id)}>Delete Post</button>
            
            <button onClick={() => setCurrentPostId(currentPostId === post.id ? null : post.id)}>
              Reply
            </button>
            
            {currentPostId === post.id && (
              <div className="reply-form">
                <textarea
                  value={replyContent[post.id] || ''}
                  onChange={(e) => setReplyContent({ ...replyContent, [post.id]: e.target.value })}
                  placeholder="Write a reply..."
                />
                <button onClick={() => addReply(post.id)}>Reply</button>
              </div>
            )}

            {post.replies.length > 0 && (
              <div className="replies">
                {post.replies.map((reply, index) => (
                  <div key={index} className="reply">
                    <p>{reply}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;
