document.addEventListener("DOMContentLoaded", () => {
 
  const apiUrl = "https://api.jsonbin.io/v3/b/6907238f43b1c97be99371ba/latest";

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      const posts = data.record.Posts; // JSONBin keeps your JSON inside 'record'
      const container = document.getElementById("posts-container");

      if (!container) {
        console.error("Error: posts-container element not found!");
        return;
      }

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
});

