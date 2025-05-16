document.addEventListener("DOMContentLoaded", () => {
  const storyList = document.getElementById("storyList");
  const postsContainer = document.getElementById("posts");

  const stories = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
  stories.forEach(name => {
    const story = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = name;
    story.appendChild(span);
    storyList.appendChild(story);
  });

  const posts = [
    { user: "siya", content: "Enjoying the beach 🌊", img: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { user: "ram", content: "Coffee time ☕", img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522its%2Bcoffee%2Btime%2522&psig=AOvVaw2epB0fglSLOB7ykbAfxF_I&ust=1747491139043000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKjnxfuVqI0DFQAAAAAdAAAAABAL" },
  ];

  posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
      <div class="post-header">
        <img src="https://via.placeholder.com/32" alt="${post.user}">
        <strong>${post.user}</strong>
      </div>
      <img src="${post.img}" alt="Post image">
      <div class="post-content">
        <strong>${post.user}</strong>
        <p>${post.content}</p>
      </div>
    `;

    postsContainer.appendChild(postDiv);
  });

  document.getElementById("loginBtn").addEventListener("click", () => {
    alert("Login clicked!");
  });

  document.getElementById("registerBtn").addEventListener("click", () => {
    alert("Register clicked!");
  });
});
const API_URL = 'http://localhost:5000/api';

async function login(username) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username })
  });

  return await res.json();
}

async function register(username) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username })
  });

  return await res.json();
}

async function fetchPosts() {
  const res = await fetch(`${API_URL}/posts`);
  return await res.json();
}

async function createPost(user, content) {
  const res = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, content })
  });

  return await res.json();
}

// Example usage
document.getElementById("loginBtn").addEventListener("click", async () => {
  const username = prompt("Enter username:");
  const res = await login(username);
  alert(res.message);
});

document.getElementById("registerBtn").addEventListener("click", async () => {
  const username = prompt("Enter new username:");
  const res = await register(username);
  alert(res.message);
});
