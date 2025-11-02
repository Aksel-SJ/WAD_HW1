 document.addEventListener("DOMContentLoaded", () => {
 /*
  const apiUrl = "https://api.jsonbin.io/v3/b/6907238f43b1c97be99371ba/latest";

  fetch(apiUrl) //get the JSON data from apiUrl
    .then(response => {
      return response.json();//converts the response into a usable JSON object.
    })
    .then(data => {
      const posts = data.record.Posts; // JSONBin puts your file inside an extra “record” layer so we use data.record.Posts
      const container = document.getElementById("posts-container");//finds the "posts-container"

      container.innerHTML = "";//clears that area

      posts.forEach(post => { // loops through every post in the JSON
        const postDiv = document.createElement("div");// creates a new <div> for each one
        postDiv.classList.add("postitus");// ads postitus class for css.

        postDiv.innerHTML =  // fills that <div>
          <img src="${post.profileImage}" alt="User" class="pildike"> //${} to insert real data from your JSON.
          <p class="parem">${post.date}</p>
          ${post.image ? <img src="${post.image}" alt="Post image" class="pildike2"> : ""}
          <p class="vasak"><strong>${post.author}:</strong> ${post.content}</p>
        ;

        container.appendChild(postDiv);// adds each post to webpage
      });
    })
    .catch(error => console.error("Error fetching posts:", error));// throws and error if anyhing goes wrong.
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

     const userIcon = document.getElementById("userIcon");
     const dropdownMenu = document.getElementById("dropdownMenu");

     userIcon.addEventListener("click", () => {
         const isVisible = dropdownMenu.style.display === "block";
         if (isVisible) {
             dropdownMenu.style.opacity = "0";
             setTimeout(() => dropdownMenu.style.display = "none", 200);
         } else {
             dropdownMenu.style.display = "block";
             setTimeout(() => dropdownMenu.style.opacity = "1", 10);
         }
     });

     document.addEventListener("click", (e) => {
         if (!userIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
             dropdownMenu.style.opacity = "0";
             setTimeout(() => dropdownMenu.style.display = "none", 200);
         }
     });
    
});

