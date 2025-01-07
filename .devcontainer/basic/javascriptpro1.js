const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});