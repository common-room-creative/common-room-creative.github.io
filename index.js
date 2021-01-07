const headerButton = document.getElementById("header-button");
const footerButton = document.getElementById("footer-button");

const contactSection = document.getElementById("contact");
const commonRoom = document.getElementById("common-room"); 
const formInput = document.getElementById("form-name"); 

const moveFocus = (btn) => {
  setTimeout(() => {
    btn.focus();
  }, 1000);
};

headerButton.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
  moveFocus(contactSection); 
});

footerButton.addEventListener("click", () => {
  commonRoom.scrollIntoView({ behavior: "smooth" });
  moveFocus(commonRoom); 
});
