/*------------------------------Contact Button-------------------------------*/

const popupButton = document.querySelector(".open-contact");
const contactDiv = document.querySelector(".contact-popup");

const closeButton = document.querySelector(".close-contact");

const overlay = document.querySelector(".contact-overlay");



popupButton.addEventListener("click", function(){
    contactDiv.classList.add("popup-active");
    overlay.classList.add("contact-active");
});

closeButton.addEventListener("click", function(){
    contactDiv.classList.remove("popup-active");
    overlay.classList.remove("contact-active");
});