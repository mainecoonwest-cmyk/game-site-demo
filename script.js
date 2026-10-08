document.addEventListener("DOMContentLoaded", () => {
  const warning = document.getElementById("topWarning");
  const close = document.getElementById("closeWarning");

  if (warning && close) {
    close.addEventListener("click", () => {
      warning.style.display = "none";
    });
  }
});
