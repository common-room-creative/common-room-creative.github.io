const headerButton = document.getElementById("header-link");
const footerButton = document.getElementById("footer-link");

const contactSection = document.getElementById("contact");
const commonRoom = document.getElementById("common-room"); 

const moveFocus = (btn) => {
  setTimeout(() => {
    btn.focus();
  }, 1000);
};

headerButton.addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth" });
  moveFocus(contactSection); 
});

footerButton.addEventListener("click", (e) => {
  e.preventDefault();
  commonRoom.scrollIntoView({ behavior: "smooth" });
  moveFocus(commonRoom); 
});
