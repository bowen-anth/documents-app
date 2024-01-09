const CLOSE_BUTTON = document.querySelector(".close");
const TOAST_CONTAINER = document.querySelector(".toast-container");

if (TOAST_CONTAINER) {
  CLOSE_BUTTON.addEventListener("click", (event) => {
    TOAST_CONTAINER.style.display = "none";
  });
}
