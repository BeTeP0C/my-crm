import {createClientCard} from "./module.js";

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector(".table");
    const back = document.querySelector(".card__back");
    const header = document.querySelector(".header");
    const main = document.querySelector(".main");
    const card = document.querySelector(".card");
    const contactsHeading = document.querySelector(".card__heading");

    back.addEventListener("click", () => {
      location.hash = "";
      contactsHeading.style.display = "none";

      const contacts = document.querySelectorAll(".card__item");

      document.body.classList.remove("show-card");
      header.classList.remove("header_hide");
      main.classList.remove("main_hide");
      card.classList.remove("card_active");

      contacts.forEach(contact => {
        contact.remove();
      });
    });

    table.addEventListener("click", e => {
      const element = e.target;

      if (element.classList.contains("client__name")) {
        createClientCard();
      }
    });

    createClientCard();
  });
}());
