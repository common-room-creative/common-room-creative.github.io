const headerButton = document.getElementById("header-button");
const footerButton = document.getElementById("footer-button");
const formInput = document.getElementById("form-name"); 

const moveFocus = (btn) => {
  setTimeout(() => {
    btn.focus();
  }, 1000);
};

headerButton.addEventListener("click", () => {
  formInput.scrollIntoView({ behavior: "smooth" });
  moveFocus(formInput); 
});

footerButton.addEventListener("click", () => {
  headerButton.scrollIntoView({ behavior: "smooth" });
  moveFocus(headerButton); 
});
