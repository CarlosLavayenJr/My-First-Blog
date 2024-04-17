document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // check if the form and elements are correctly selected
    console.log('Form submitted', this);

    // the Variable is the 3 Elements
    var usernameElement = document.getElementById('username');
    var titleElement = document.getElementById('title');
    var contentElement = document.getElementById('content');

    // Log the elements to check if any are null since it happened 43589734857 times
    console.log('Username element:', usernameElement);
    console.log('Title element:', titleElement);
    console.log('Content element:', contentElement);

    if (!usernameElement || !titleElement || !contentElement) {
        console.error('One or more form elements are missing!');
        return; 
    }

    var Username = usernameElement.value;
var title = titleElement.value;
var content = contentElement.value;

console.log('Username:', Username);
console.log('Title:', title);
console.log('Content:', content);

// Create a new post object
var newPost = {
  name: Username,
  title: title,
  content: content  
};

// Try to get the existing posts from localStorage
var posts = JSON.parse(localStorage.getItem('blogPosts')) || []; // Change 'DataFromForm' to 'blogPosts'

// Add the new post to the array of posts
posts.push(newPost);

// Save the updated array back to localStorage
localStorage.setItem('blogPosts', JSON.stringify(posts)); // Change 'DataFromForm' to 'blogPosts'

console.log('Updated posts:', posts);

alert('Thank god it worked!');

window.location.href = "blog.html";
});
