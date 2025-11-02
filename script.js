 document.addEventListener("DOMContentLoaded", () => {
 /*
  const apiUrl = "https://api.jsonbin.io/v3/b/6907238f43b1c97be99371ba/latest";

  fetch(apiUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const posts = data.record.Posts;
      const container = document.getElementById("posts-container");

      container.innerHTML = "";

      posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("postitus");

        postDiv.innerHTML = `
          <img src="${post.profileImage}" alt="User" class="pildike">
          <p class="parem">${post.date}</p>
          ${post.image ? `<img src="${post.image}" alt="Post image" class="pildike2">` : ""}
          <p class="vasak"><strong>${post.author}:</strong> ${post.content}</p>
        `;

        container.appendChild(postDiv);
      });
    })
    .catch(error => console.error("Error fetching posts:", error));
*/


  // Fetching from a local JSON file
  
  fetch("./Data/my.json")
    .then(res => {
      return res.json();
    })
    .then(posts => {
      const container = document.getElementById("posts-container");

      // Clear old content
      container.innerHTML = "";

      // Loop through each post
      posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("postitus");

        postDiv.innerHTML = `
          <img src="${post.profileImage}" alt="${post.author}" class="pildike">
          <p class="parem">${post.date}</p>
          ${post.image ? `<img src="${post.image}" alt="Post image" class="pildike2">` : ""}
          <p class="vasak"><strong>${post.author}:</strong> ${post.content}</p>
        `;

        container.appendChild(postDiv);
      });
    })
    .catch(error => console.error("Error loading local posts:", error));
    
});

