import React, { useState } from "react";

const Community = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "Alice", content: "Excited to be here! 🚀", likes: 2, comments: [] },
  ]);

  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([{ id: Date.now(), user: "You", content: newPost, likes: 0, comments: [] }, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        <span role="img" aria-label="community">🌟</span> Community
      </h1>

      <div style={styles.postBox}>
        <textarea
          style={styles.textarea}
          placeholder="Share something..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button style={styles.button} onClick={addPost}>Post</button>
      </div>

      {posts.map((post) => (
        <div key={post.id} style={styles.post}>
          <p style={styles.user}>{post.user}</p>
          <p style={styles.content}>{post.content}</p>
          <p style={styles.likes}>👍 {post.likes} Likes</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#121212", // Dark mode background
    color: "#fff", // White text
    borderRadius: "10px",
  },
  heading: {
    textAlign: "center",
    fontSize: "22px",
    marginBottom: "15px",
  },
  postBox: {
    background: "#1e1e1e", // Darker input box
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(255, 255, 255, 0.1)",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    border: "1px solid #333",
    borderRadius: "5px",
    resize: "none",
    backgroundColor: "#252525",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: "8px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "5px",
    fontWeight: "bold",
  },
  post: {
    background: "#1e1e1e",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  user: {
    fontWeight: "bold",
    color: "#f5f5f5",
  },
  content: {
    margin: "5px 0",
    color: "#ddd",
  },
  likes: {
    fontSize: "12px",
    color: "#bbb",
  },
};

export default Community;
