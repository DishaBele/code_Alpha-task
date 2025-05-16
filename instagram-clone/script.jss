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
    { user: "Alice", content: "Enjoying the beach 🌊", img: "https://via.placeholder.com/600x400" },
    { user: "Bob", content: "Coffee time ☕", img: "https://via.placeholder.com/600x400" },
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
