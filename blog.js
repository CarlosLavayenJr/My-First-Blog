document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.getElementById('theme-toggle');
  const headerElement = document.querySelector('header'); // Correctly selecting the header element

  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');
      headerElement.classList.toggle('dark-mode'); // Toggle the class on the header element
      headerElement.classList.toggle('light-mode'); // Toggle the class on the header element

      const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('theme', mode); // Save theme preference for next visit
      
      // Console log to see which theme is active after the click
      console.log('Theme toggled to:', mode);
  });

  // Check for saved user theme preference, if any, and apply it
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      headerElement.classList.add('dark-mode'); // Apply the dark mode to the header as well
  } else {
      document.body.classList.add('light-mode');
      headerElement.classList.add('light-mode'); // Apply the light mode to the header as well
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadBlogPosts();
});

function loadBlogPosts() {
  const postsContainer = document.getElementById('blog-posts-container');
  // Make sure to use 'blogPosts' here, the same key used in form.js
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
  postsContainer.innerHTML = ''; // Clear previous contents

  posts.forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <p>Posted by ${post.name}</p>
      <hr>
    `;
    postsContainer.appendChild(postElement);
  });

  if (posts.length === 0) {
    postsContainer.innerHTML = '<p>No blog posts to display.</p>'; // Display a message if there are no posts
  }
}

// Call the loadBlogPosts function to load posts when the document is ready
document.addEventListener('DOMContentLoaded', loadBlogPosts);


