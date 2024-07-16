console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  // Exercise: Append a new entry to the toast messages container
  const newToast = document.createElement("li");
  newToast.innerHTML = `<p class = "toast-container__message"> I´m a toast message.</p>`;

  toastContainer.append(newToast);
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
