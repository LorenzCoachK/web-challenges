console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

function clonePost() {
  const originalPost = document.querySelector(".post");
  const clonedPost = originalPost.cloneNode(true);

  const clonedLikeButton = clonedPost.querySelector('[data-js="like-button"]');
  clonedLikeButton.addEventListener("click", handleLikeButtonClick);

  document.body.appendChild(clonedPost);
}

// Clone and append a second social media post
clonePost();
