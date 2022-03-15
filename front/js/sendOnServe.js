import {showModal, modalCloseDelete, closeModal, inputActive, addContacts, validate, saveOnServer } from './module.js';
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal-registration");

    showModal("registration");
    addContacts(modal);
    inputActive(modal);
    closeModal();
    validate(modal);
    saveOnServer();
    modalCloseDelete();
  });
}());
