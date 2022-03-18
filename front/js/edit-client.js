import {inputActive, addContacts, validate, editClient} from './module.js'

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal-edit");

    addContacts(modal);
    inputActive(modal);
    validate(modal);
    editClient();
  });
}());
