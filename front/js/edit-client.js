import {showModalEdit, deleteContacts, modalCloseEdit, createContactEdit, inputActive, addContacts, validate, editClient} from './module.js'

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal-edit");
    let permission = true;

    addContacts(modal);
    inputActive(modal);
    validate(modal);
    editClient();
  });
}());
