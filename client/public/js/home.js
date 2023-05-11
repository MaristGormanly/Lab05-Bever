window.addEventListener('load', () => {
    // Load the posts on page load
    getFeed();
  
    // Add an event listener to the form submit button
    document.getElementById('post-form').addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Get the title and description values from the form
      let title = document.getElementById('title').value;
      let description = document.getElementById('description').value;
  
      // Use the fetch API to send a POST request to the server with the new post data
      fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          description: description
        })
      })
      .then(response => {
        // If the response from the server is successful, clear the form and reload the posts
        if (response.ok) {
          document.getElementById('title').value = '';
          document.getElementById('description').value = '';
          getFeed();
        } else {
          console.log('Error submitting post');
        }
      });
    });
  });
  
  // Function to get the posts and display them on the page
  function getFeed() {
    fetch('/api/post')
    .then(response => {
      // If the response from the server is successful, convert it to JSON and display the posts
      if (response.ok) {
        response.json()
        .then(posts => {
          let feedHtml = '';
          posts.forEach(post => {
            feedHtml += `
              <div class="post">
                <h3>${post.title}</h3>
                <p>${post.description}</p>
              </div>
            `;
          });
          document.getElementById('postForm').innerHTML = feedHtml;
        });
      } else {
        console.log('Error retrieving posts');
      }
    });
  }