const body = document.querySelector("body");
const modalRegistration = document.querySelector(".modal-registration");
const modalDelte = document.querySelector(".modal-delete");
const modalEdit = document.querySelector(".modal-edit");
const buttonSave = modalEdit.querySelector(".modal__save");
const esc = 27;
const clicker = {
  typeSort: "id",
  currentButton: document.querySelector(".table__button.is-id"),
  amountClick: 1,
}

let countClick = 0;
let permission = true;

export function showModal (type="registration") {
  const modalOverlay = document.querySelector(".modal-overlay");

  if (type = "registration") {
    const button = document.querySelector(".clients__button");
    const buttonAdd = modalRegistration.querySelector(".contacts__add");
    const buttonClose = modalRegistration.querySelector(".modal__close");

    button.addEventListener("click", () => {
      modalOverlay.classList.add("modal-overlay_active");
      modalRegistration.classList.add("modal_active");
      modalRegistration.classList.add("modal-registration_active");
      modalRegistration.classList.remove("modal_close");
      buttonAdd.classList.remove("contacts__add_hide");
      body.style.overflowY = "hidden";

      setTimeout(() => {
        buttonClose.focus();
      }, 100);
    });
  }
};

export function closeModal (type = "modal-registration") {
  if (type === "modal-registration") {
    const modalOverlay = document.querySelector(".modal-overlay");
    const buttonClose = modalRegistration.querySelector(".modal__close");
    const buttonCancellation = modalRegistration.querySelector(".modal__cancellation");

    const removeModal = () => {
      modalOverlay.classList.remove("modal-overlay_active");
      modalRegistration.classList.remove("modal_active");
      modalRegistration.classList.remove("modal-registration_active");
      modalRegistration.classList.add("modal_close");
      body.style.overflowY = "auto";
    }

    buttonClose.addEventListener("click", () => {
      removeModal();
    });
    buttonCancellation.addEventListener("click", () => {
      removeModal();
    });

    modalOverlay.addEventListener("click", e => {
      if (e.target == modalOverlay) {
        removeModal();
      }
    });
    document.addEventListener("keydown", e => {
      if (e.keyCode == esc) {
        removeModal();
      }
    });
  }
}

export function showModalDelete () {
  const modalOverlay = document.querySelector(".modal-overlay");
  const buttonClose = modalDelte.querySelector(".modal__close");

  modalDelte.classList.add("modal_active");
  modalDelte.classList.add("modal-delete_active");
  modalDelte.classList.remove("modal_close");
  modalOverlay.classList.add("modal-overlay_active");
  body.style.overflowY = "hidden";

  setTimeout(() => {
    buttonClose.focus();
  }, 100);
};

export function modalCloseDelete () {
  const modalOverlay = document.querySelector(".modal-overlay");
  const buttonClose = modalDelte.querySelector(".modal__close");
  const buttonDelete = modalDelte.querySelector(".modal__delete");
  const buttonCancellation = modalDelte.querySelector(".modal__cancellation");

  const removeModal = () => {
    modalOverlay.classList.remove("modal-overlay_active");
    modalDelte.classList.remove("modal_active");
    modalDelte.classList.remove("modal-delete_active");
    modalDelte.classList.add("modal_close");
    body.style.overflowY = "auto";
  }

  buttonDelete.addEventListener("click", () => {
    removeModal();
  });

  buttonClose.addEventListener("click", () => {
    removeModal();
  });
  buttonCancellation.addEventListener("click", () => {
    removeModal();
  });

  modalOverlay.addEventListener("click", e => {
    if (e.target == modalOverlay) {
      removeModal();
    }
  });
  document.addEventListener("keydown", e => {
    if (e.keyCode == esc) {
      removeModal();
    }
  });
};

export function showModalEdit () {
  const modalOverlay = document.querySelector(".modal-overlay");
  const buttonAdd = modalEdit.querySelector(".contacts__add");
  const buttonClose = modalEdit.querySelector(".modal__close");

  modalOverlay.classList.add("modal-overlay_active");
  modalEdit.classList.add("modal_active");
  modalEdit.classList.add("modal-registration_active");
  modalEdit.classList.remove("modal_close");
  buttonAdd.classList.remove("contacts__add_hide");
  body.style.overflowY = "hidden";

  setTimeout(() => {
    buttonClose.focus();
  }, 100);
};

export function deleteContacts () {
  const contacts = modalEdit.querySelector(".contacts");
  const content = modalEdit.querySelector(".contacts__content");
  const items = modalEdit.querySelectorAll(".contacts__item");

  content.classList.remove("contacts__content_active");
  contacts.classList.remove("contacts_active");
  items.forEach(item => {
    item.remove();
  });
};

export function modalCloseEdit () {
  const modalOverlay = document.querySelector(".modal-overlay");
  const buttonClose = modalEdit.querySelector(".modal__close");
  const buttonCancellation = modalEdit.querySelector(".modal__cancellation");

  const removeModal = () => {
    modalOverlay.classList.remove("modal-overlay_active");
    modalEdit.classList.remove("modal_active");
    modalEdit.classList.remove("modal-delete_active");
    modalEdit.classList.remove("modal-registration_active");
    modalEdit.classList.add("modal_close");
    setTimeout(() => {
      deleteContacts();
    }, 500);
    body.style.overflowY = "auto";
  }

  buttonClose.addEventListener("click", () => {
    removeModal();
  });
  buttonCancellation.addEventListener("click", () => {
    removeModal();
  });

  modalOverlay.addEventListener("click", e => {
    if (e.target == modalOverlay) {
      removeModal();
    }
  });
  document.addEventListener("keydown", e => {
    if (e.keyCode == esc) {
      removeModal();
    }
  });
};

export function createContactEdit (selectContact = "Телефон") {
  let contacts = ['Телефон', 'Email', 'Facebook', 'VK', 'Другое'];

  const list = modalEdit.querySelector('.contacts__list');
  const contactFirst = contacts[0];
  contacts[contacts.indexOf(selectContact)] = contactFirst;
  contacts[0] = selectContact;
  const buttonAdd = document.querySelector(".contacts__add");
  const item = document.createElement("li");
  const form = document.createElement("form");
  const select = document.createElement("select");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const block = document.querySelector(".contacts");
  const content = document.querySelector(".contacts__content");
  const icon = `
  <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>
  </svg>`;

  item.classList.add("contacts__item");
  form.classList.add("contacts__form");
  select.classList.add("contacts__drop");
  input.classList.add("contacts__input");
  button.classList.add("contacts__delete", "btn-clear");

  for (let i = 0; i < contacts.length; i++) {
    const option = document.createElement("option");
    option.classList.add("contacts__option");
    option.textContent = `${contacts[i]}`;

    select.prepend(option);
  }

  input.setAttribute("placeholder", "Введите данные контакта");
  input.addEventListener("input", () => {
    if (!input.value == "") {
      button.classList.add("contacts__delete_active");
    } else {
      button.classList.remove("contacts__delete_active");
    }
  });

  button.innerHTML = icon;
  button.addEventListener("click", () => {
    item.remove();
    if (list.children.length === 0) {
      content.classList.remove("contacts__content_active");
      block.classList.remove("contacts_active");
    }

    if (list.children.length !== 10) {
      buttonAdd.classList.remove("contacts__add_hide");
    }
  });

  form.append(select);
  form.append(input);
  form.append(button);
  item.append(form);
  list.append(item);

  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
  });
};

export function inputActive (modal) {
  const labels = modal.querySelectorAll(".modal__label");

  labels.forEach(label => {
    const input = label.querySelector(".modal__input");
    const title = label.querySelector(".modal__title");

    if (modal == modalEdit) {
      if (input.value !== "") {
        label.classList.add("modal__label_active");
        input.classList.add("modal__input_active");
        title.classList.add("modal__title_active");
      } else {
        label.classList.remove("modal__label_active");
        input.classList.remove("modal__input_active");
        title.classList.remove("modal__title_active");
      };
    };

    input.addEventListener("focus", () => {
      label.classList.add("modal__label_active");
      input.classList.add("modal__input_active");
      title.classList.add("modal__title_active");
    });

    input.addEventListener("blur", () => {
      if (input.value === "") {
        label.classList.remove("modal__label_active");
        input.classList.remove("modal__input_active");
        title.classList.remove("modal__title_active");
      };
    });
  });
};

export function createContact () {
  const list = modalRegistration.querySelector('.contacts__list');
  const contacts = ['Телефон', 'Email', 'Facebook', 'VK', 'Другое'];
  const buttonAdd = modalRegistration.querySelector(".contacts__add");
  const item = document.createElement("li");
  const form = document.createElement("form");
  const select = document.createElement("select");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const block = modalRegistration.querySelector(".contacts");
  const content = modalRegistration.querySelector(".contacts__content");
  const icon = `
  <svg class='contacts__icon' width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>
  </svg>`;

  item.classList.add("contacts__item");
  form.classList.add("contacts__form");
  select.classList.add("contacts__drop");
  input.classList.add("contacts__input");
  button.classList.add("contacts__delete", "btn-clear");

  for (let i = 0; i < contacts.length; i++) {
    const option = document.createElement("option");
    option.classList.add("contacts__option");
    option.textContent = `${contacts[i]}`;

    select.prepend(option);
  }

  input.setAttribute("placeholder", "Введите данные контакта");
  input.addEventListener("input", () => {
    if (!input.value == "") {
      button.classList.add("contacts__delete_active");
    } else {
      button.classList.remove("contacts__delete_active");
    }
  });

  button.innerHTML = icon;
  button.addEventListener("click", () => {
    item.remove();
    if (list.children.length === 0) {
      content.classList.remove("contacts__content_active");
      block.classList.remove("contacts_active");
    }

    if (list.children.length !== 10) {
      buttonAdd.classList.remove("contacts__add_hide");
    }
  });

  form.append(select);
  form.append(input);
  form.append(button);
  item.append(form);
  list.append(item);

  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
  });
};

export function addContacts (modal) {
  const block = modal.querySelector(".contacts");
  const buttonAdd = modal.querySelector(".contacts__add");
  const list = modal.querySelector(".contacts__list");
  const content = modal.querySelector(".contacts__content");

  buttonAdd.addEventListener("click", () => {
    content.classList.add("contacts__content_active");
    block.classList.add("contacts_active");

    if (modal == modalEdit) {
      if (permission) {
        createContactEdit();
      }
    } else if (modal == modalRegistration) {
        createContact();
    }

    if (list.children.length == 10) {
      buttonAdd.classList.add("contacts__add_hide");
    }
  });
};

export function validate (modal)  {
  const form = modal.querySelector(".modal__form");
  const inputUsersMust = modal.querySelectorAll(".modal__input_must");
  const inputUserUnmust = modal.querySelector(".modal__input_unmust");
  const buttonSave = modal.querySelector(".modal__save");
  const createError = (text) => {
    const error = document.createElement("span");

    error.textContent = text;
    error.classList.add("modal__error");

    return error;
  };

  form.addEventListener("submit", e => {
    e.preventDefault();
  });

  buttonSave.addEventListener("click", () => {
    const validateFormUser = () => {
      inputUsersMust.forEach(inputUser => {
        const label = inputUser.parentNode;

        const deleteError = () => {
          if (label.querySelector(".modal__error") != null) {
            label.querySelector(".modal__error").remove();
          }
        };

        const addError = (error) => {
          deleteError();
          if (error != undefined) {
            label.append(error);
          }
        };

        if (inputUser.value === "") {
          addError(createError("Это поле обязательно для ввода"));
        } else {
          deleteError();
        }

        if (inputUser.value.length < 2 && inputUser.value != "") {
          addError(createError("Минимум 2 символа"));
        };

        if (inputUser.value.length > 25) {
          addError(createError("Максимум 25 символов"));
        }

        if (inputUser.value.trim().split(" ").length > 1) {
          addError(createError("Максимум одно слово"));
        }

        const labelUnmust = inputUserUnmust.parentElement;
        const deleteErrorUnmust = () => {
          if (labelUnmust.querySelector(".modal__error") != null) {
            labelUnmust.querySelector(".modal__error").remove();
          }
        };
        const addErrorUnmust = (error) => {
          deleteErrorUnmust();
          if (error != undefined) {
            labelUnmust.append(error);
          }
        };

        if (inputUserUnmust.value != "" || inputUserUnmust.value === "") {
          deleteErrorUnmust();
        }

        if (inputUserUnmust.value.length < 2 && inputUserUnmust.value != "") {
          addErrorUnmust(createError("Минимум 2 символа"));
        };

        if (inputUserUnmust.value.length > 25) {
          addErrorUnmust(createError("Максимум 25 символов"));
        }

        if (inputUserUnmust.value.trim().split(" ").length > 1) {
          addErrorUnmust(createError("Максимум одно слово"));
        }
      });
    };

    validateFormUser();
  });

  const validateContact = () => {
    const addContacts = modal.querySelector(".contacts__add");
    const choiceIput = () => {
      const forms = modal.querySelectorAll(".contacts__form");
      forms.forEach(form => {
        form.addEventListener("submit", e => {
          e.preventDefault();
        });
        const select = form.querySelector(".contacts__drop");
        const input = form.querySelector(".contacts__input");
        const contactFunctionality = () => {
          const optionSelected = form.querySelector(".choices__item--selectable");
          const typeContact = optionSelected.textContent;

          if (typeContact === "Телефон") {
            input.setAttribute("type", "tel");
            input.classList.add("contacts__input_number");
          } else {
            input.setAttribute("type", "text");
            input.classList.remove("contacts__input_number");
            Inputmask("").mask(input).remove();
          }
        };

        contactFunctionality();

        select.addEventListener("change", () => {
          input.value = "";
          contactFunctionality();
        });
      });
    };

    addContacts.addEventListener("click", () => {
      const selects = modal.querySelectorAll(".contacts__drop");
      choiceIput();
    });

    buttonSave.addEventListener("click", () => {
      const forms = modal.querySelectorAll(".contacts__form");

      forms.forEach(form => {
        const input = form.querySelector(".contacts__input");
        const optionSelected = form.querySelector(".choices__item--selectable");
        const typeContact = optionSelected.textContent;
        const contactError = document.createElement("span");

        const deleteError = () => {
          if (form.querySelector(".contacts__error") != null) {
            form.querySelector(".contacts__error").remove();
          }
        };

        const addError = (error, text) => {
          deleteError();
          if (error != undefined) {
            error.textContent = text;
            form.append(error);
          }
        };

        contactError.classList.add("contacts__error");

        if (typeContact === "Телефон") {
          const valueUnmasket = input.inputmask.unmaskedvalue();

          if (valueUnmasket == "") {
            addError(contactError, "Введите значение");
          } else if (valueUnmasket.length < 10) {
            addError(contactError, "Вы неполностью ввели");
          } else {
            deleteError();
          }
        } else {
          if (input.value == "") {
            addError(contactError, "Введите значение");
          } else if (input.value.trim().length < 2) {
            addError(contactError, "Минимум 2 символа");
          } else if (input.value.trim().length > 30) {
            addError(contactError, "Максимум 30 символов");
          } else {
            if (typeContact === "Email") {
              const text = input.value.trim();
              let valueSearch = '';

              for (let i = 0; i < text.length; i++) {
                if (text[i] === "@") {
                  valueSearch = "найден";
                  break;
                }
              }

              if (valueSearch !== "найден") {
                addError(contactError, "Некоректный ввод почты");
              } else {
                deleteError();
              }
            } else {
              deleteError();
            }
          }
        }
      });
    });
  };

  validateContact();
}

export function addClients (e = "default", array) {
  const deleteClients = () => {
    const clients = document.querySelectorAll(".client");

    clients.forEach(client => {
      client.remove();
    });
  }

  async function addClient () {
    const table = document.querySelector(".table__content");
    const clientsContent = document.querySelector(".clients__content");
    const preloader = document.querySelector(".clients__preloader");
    clientsContent.classList.add("is-load");
    preloader.classList.add("clients__preloader_active");

    const defineArray = async () => {
      const response = await fetch("http://localhost:3000/api/clients");

      array ??= await response.json();
      return array;
    }
    const data = await defineArray();

    table.addEventListener("click", e => {
      if (e.target.classList.contains("client__additionally")) {
        const button = e.target;
        const list = button.parentNode.parentNode;
        const items = list.querySelectorAll(".client__item");
        button.classList.add("client__additionally_hide");

        for (let i = 0; i < items.length; i++) {
          const item = items[i];

          if (i < 5) {
            item.classList.add("top");
          }

          item.querySelector(".client__contact").classList.remove("client__contact_hide");
          item.classList.remove("client__item_hide");
        }
      };
    });

    setTimeout(() => {
      data.forEach(el => {
        const line = document.createElement("tr");
        const id = document.createElement("td");
        const infoUser = document.createElement("td");
        const dateCreate = document.createElement("td");
        const dateCreateExact = document.createElement("span");
        const dateEdit = document.createElement("td");
        const dateEditExact = document.createElement("span");
        const contacts = document.createElement("td");
        const clientList = document.createElement("ul");
        const actions = document.createElement("td");
        const buttonEdit = document.createElement("button");
        const buttonDelete = document.createElement("button");

        infoUser.addEventListener("click", () => {
          location.hash = `id-${el.id}`;
        });

        const createText = el.createdAt.split("T")[0].split('-');
        const createTextExact = el.createdAt.split("T")[1].split('.')[0].split(":");
        const editText =  el.updatedAt.split("T")[0].split('-');
        const editTextExact = el.updatedAt.split("T")[1].split('.')[0].split(":");

        id.textContent = el.id;
        infoUser.textContent = `${el.surname} ${el.name} ${el.lastName}`.trim();

        const yearCreate = createText[0];
        createText[0] = createText[2];
        createText[2] = yearCreate;
        dateCreate.textContent = ` ${createText.join()} `;
        dateCreateExact.textContent = `${createTextExact[0]}:${createTextExact[1]}`;

        const yearEdit = editText[0];
        editText[0] = editText[2];
        editText[2] = yearEdit;
        dateEdit.textContent = ` ${editText.join(".")} `;
        dateEditExact.textContent = `${editTextExact[0]}:${editTextExact[1]}`;

        for (let i = 0; i < el.contacts.length; i++) {
          const contact = el.contacts[i];

          const item = document.createElement("li");
          const button = document.createElement("button");
          const prompt = document.createElement("span");
          const typePrompt = document.createElement("span");
          const linkPrompt = document.createElement("a");
          const buttonShow = document.createElement("button");

          item.classList.add("client__item");
          button.classList.add("client__contact", "btn-clear");
          buttonShow.classList.add("client__additionally", "btn-clear");
          prompt.classList.add("client__prompt");
          typePrompt.classList.add("client__type");
          linkPrompt.classList.add("client__link");

          typePrompt.textContent = `${contact.type}:`;
          linkPrompt.textContent = contact.value;

          if (contact.type === "Телефон") {
            button.classList.add("client__contact-tel");
            linkPrompt.setAttribute("href", `tel: ${contact.value}`)
          } else if (contact.type === "Email") {
            button.classList.add("client__contact-mail");
            linkPrompt.setAttribute("href", `mailto: ${contact.value}`)
          } else if (contact.type === "VK") {
            button.classList.add("client__contact-vk");
            linkPrompt.setAttribute("href", `${contact.value}`)
          } else if (contact.type === "Facebook") {
            button.classList.add("client__contact-fb");
            linkPrompt.setAttribute("href", `${contact.value}`)
          } else if (contact.type === "Другое") {
            button.classList.add("client__contact-other");
            typePrompt.textContent = "";
          }

          if (el.contacts.length > 5) {
            if (i === 4) {
              button.classList.add("client__contact_hide");
              buttonShow.textContent = `+${el.contacts.length - 4}`
              item.append(buttonShow)
            } else if (i > 4) {
              item.classList.add("client__item_hide");
            }
          }

          prompt.append(typePrompt);
          prompt.append(linkPrompt);
          button.append(prompt);
          item.append(button);
          clientList.append(item);
        }

        buttonEdit.textContent = "Изменить";
        buttonDelete.textContent = "Удалить";

        line.classList.add("table__client", "client", "table__line")
        id.classList.add("client__cell", "client__id");
        infoUser.classList.add("client__cell", "client__name");
        dateCreate.classList.add("client__cell", "client__date-create");
        dateCreateExact.classList.add("client__date-exact");
        dateEdit.classList.add("client__cell", "client__date-change");
        dateEditExact.classList.add("client__date-exact");
        contacts.classList.add("client__cell", "client__contacts");
        clientList.classList.add("client__list");
        actions.classList.add("client__cell", "client__buttons");
        buttonEdit.classList.add("client__button", "btn-clear", "client__button-edit");
        buttonDelete.classList.add("client__button", "btn-clear", "client__button-delete");

        dateCreate.append(dateCreateExact);
        dateEdit.append(dateEditExact);
        contacts.append(clientList);
        actions.append(buttonEdit);
        actions.append(buttonDelete);
        line.append(id);
        line.append(infoUser);
        line.append(dateCreate);
        line.append(dateEdit);
        line.append(contacts);
        line.append(actions);

        buttonDelete.addEventListener("click", () => {
          const button = modalDelte.querySelector(".modal__delete");
          button.classList.add(`delete-${el.id}`);

          showModalDelete();
          button.addEventListener("click", async () => {
            if (button.classList.contains(`delete-${el.id}`)) {
              await fetch(`http://localhost:3000/api/clients/${id.textContent}`, {
                method: "DELETE"
              });

              button.classList.remove(`delete-${el.id}`);
              line.remove();
            }
          });
        });

        table.append(line);
      });
    }, 1000)

    setTimeout(() => {
      preloader.classList.remove("clients__preloader_active");
      clientsContent.classList.remove("is-load");
    }, 1000);
  }

  if (e === "default") {
    addClient();

  } else if (e === "click") {

    addClient();
    deleteClients();
  }
};

export function saveOnServer () {
  const buttonAdd = modalRegistration.querySelector(".modal__save");

  const closeModal = () => {
    const labelUsers = modalRegistration.querySelectorAll(".modal__label");
    const contactItems = modalRegistration.querySelectorAll(".contacts__item");
    const contacts = modalRegistration.querySelector(".modal__contacts");
    const contactsContent = modalRegistration.querySelector(".contacts__content");
    const modalOverlay = document.querySelector(".modal-overlay");
    const button = modalRegistration.querySelector(".contacts__add");

    modalRegistration.classList.add("modal_close");

    modalOverlay.classList.remove("modal-overlay_active");
    modalRegistration.classList.remove("modal_active");
    body.style.overflowY = "auto";
    contacts.classList.remove("contacts_active");
    contactsContent.classList.remove("contacts__content_active");

    if (button.classList.contains("contacts__add_hide")) {
      button.classList.remove("contacts__add_hide");
    }

    labelUsers.forEach(labelUser => {
      const input = labelUser.querySelector(".modal__input");
      const title = labelUser.querySelector(".modal__title");

      labelUser.classList.remove("modal__label_active");
      title.classList.remove("modal__title_active");
      input.classList.remove("modal__input_active");
      input.value = "";
    });

    contactItems.forEach(contactItem => {
      contactItem.remove();
    });
  };

  buttonAdd.addEventListener("click", () => {
    const errorUsers = modalRegistration.querySelectorAll(".modal__error").length;
    const errorContacts = modalRegistration.querySelectorAll(".contacts__error").length;

    const checkErrors = () => {
      let answer = true;

      if (errorUsers + errorContacts !== 0) {
        answer = false;
      }

      return answer;
    }
    if (checkErrors()) {
      async function checkOnServer() {
        const forms = modalRegistration.querySelectorAll(".contacts__form");
        const inputs = modalRegistration.querySelectorAll(".modal__input");
        const infoUser = {
          surname: "",
          name: "",
          middlename: ""
        };

        const rightSend = (value) => {
          console.log(value.slice(1).trim().toLowerCase());
          const convertedValue = value[0].toUpperCase() + value.slice(1).trim().toLowerCase();
          return convertedValue;
        };

        const infoContacts = [];

        if (forms.length !== 0) {
          for (let i = 0; i < forms.length; i++) {
            const form = forms[i];
            const input = form.querySelector(".contacts__input");
            const selectedType = form.querySelector(".choices__item--selectable");
            let contact = {};

            infoContacts.push(
              contact = {
                type: selectedType.textContent,
                value: input.value,
              }
            );
          }
        }

        inputs.forEach(input => {
          if (input.id === "surname") {
            infoUser.surname = rightSend(input.value);
          } else if (input.id === "name") {
            infoUser.name = rightSend(input.value);
          } else if (input.id === "middlename") {
            if (input.value !== "") {
              infoUser.middlename = rightSend(input.value);
            }
          }
        });

        const response = await fetch("http://localhost:3000/api/clients", {
          method: "POST",
          body: JSON.stringify({
            surname: infoUser.surname,
            name: infoUser.name,
            lastName: infoUser.middlename,
            contacts: infoContacts,
          }),
          headers: {"Content-Type": "application/json"},
        });

        if (response.status === 422 || response.status === 404 || response.status >= 500) {
          const serverError = modalRegistration.querySelector(".contacts__error-server");

          serverError.textContent = `Ошибка: ${response.statusText}`;
          serverError.classList.add("contacts__error-server_active");
        } else if (response.status === 200 || response.status === 201) {
          const serverError = modalRegistration.querySelector(".contacts__error-server");

          serverError.textContent = "";
          serverError.classList.remove("contacts__error-server_active");

          setTimeout(() => {
            closeModal();

            sortClients()
          }, 500);
        }
      }
      checkOnServer();
    };
  });
};

export function deleteClient () {
  const table = document.querySelector(".table__content");
  table.addEventListener("click", e => {
    if (e.target.classList.contains("client__button-delete")) {
      e.preventDefault();
      const buttonDelete = modalDelte.querySelector(".modal__delete");
      const client = e.target.parentNode.parentNode;
      const button = client.querySelector(".client__button-delete");
      const id = client.querySelector(".client__id").textContent;

      showModalDelete();
      buttonDelete.addEventListener("click", async () => {
        await fetch(`http://localhost:3000/api/clients/${id}`, {
          method: "DELETE"
        });
        client.remove();
      });
    };
  });
};

export function editClient () {
  const table = document.querySelector(".table__content");
  const buttonContact = modalEdit.querySelector(".contacts__add");
  const deleteButton = modalEdit.querySelector(".modal__cancellation");
  table.addEventListener("click", async e => {
    if (e.target.classList.contains("client__button-edit")) {
      const button = e.target;
      const client = button.parentNode.parentNode;
      const addContact = modalEdit.querySelector(".contacts__add");
      const id = client.querySelector(".client__id").textContent;
      const response = await fetch(`http://localhost:3000/api/clients/${id}`);
      const data = await response.json();
      const modalId = modalEdit.querySelector(".modal-edit__id");
      const labels = modalEdit.querySelectorAll(".modal__label");
      let listContacts = modalEdit.querySelector(".contacts__list");

      labels.forEach(label => {
        const input = label.querySelector(".modal__input");

        if (input.classList.contains("modal-edit__surname")) {
          input.value = data.surname;
        } else if (input.classList.contains("modal-edit__name")) {
          input.value = data.name;
        } else if (input.classList.contains("modal-edit__middlename")) {
          input.value = data.lastName;
        }
      });

      inputActive(modalEdit);

      data.contacts.forEach(contact => {
        const items = modalEdit.querySelector(".contacts__list").children;
        permission = false;
        buttonContact.click(createContactEdit(contact.type));

        const item = items[items.length - 1];
        const inputContact = item.querySelector(".contacts__input");
        inputContact.value = contact.value;
        permission = true;
      });

      modalId.textContent = `ID: ${id}`;

      const checkChanges = () => {
        const changeButton = () => {
          deleteButton.classList.add("modal-edit__button-delete");
          deleteButton.textContent = "Удалить";
        };

        changeButton();

        const returnButton = () => {
          deleteButton.classList.remove("modal-edit__button-delete");
          deleteButton.textContent = "Отмена";
        }

        let answer = false;

        labels.forEach(label => {
          const input = label.querySelector(".modal__input");

          input.addEventListener("input", () => {
            if (input.classList.contains("modal-edit__surname")) {
              if (input.value === data.surname) {
                answer = true;
                changeButton();
              } else {answer = false; returnButton()};
            } else if (input.classList.contains("modal-edit__name")) {
              if (input.value === data.name) {
                answer = true;
                changeButton();
              } else {answer = false; returnButton()};
            } else if (input.classList.contains("modal-edit__middlename")) {
              if (input.value === data.lastName) {
                answer = true;
                changeButton();
              } else {answer = false; returnButton()};
            }
          });
        });

        const checkContacts = () => {
          const list = modalEdit.querySelectorAll(".contacts__item");

          if ((list.length === data.contacts.length) && list.length === 0) {
            changeButton();
          } else if (list.length === 0) {
            returnButton();
          } else {
            list.forEach(item => {
              if (list.length !== data.contacts.length) {
                returnButton();
              } else {
                const input = item.querySelector(".contacts__input");
                const select = item.querySelector(".contacts__drop");

                const checkInput = () => {
                  let countDiscrepancy = 0;
                  for (let i = 0; i < list.length; i++) {
                    const newItem = list[i];
                    const newInput = newItem.querySelector(".contacts__input");

                    if (newInput.value !== data.contacts[i].value) {
                      countDiscrepancy+=1;
                    };
                  };

                  if (countDiscrepancy > 0) {
                    returnButton()
                  } else {

                    changeButton();
                  }
                }
                checkInput();

                input.addEventListener("input", () => {
                  checkInput();
                });

                select.addEventListener("choice" , () => {
                  returnButton();
                });
              };
            });
          }
        };

        checkContacts();

        addContact.addEventListener("click", () => {
          checkContacts();
        });

        listContacts.addEventListener("click", e => {
          if (e.target.classList.contains("contacts__delete")
           || e.target.parentNode.classList.contains("contacts__delete")
           || e.target.parentNode.parentNode.classList.contains("contacts__delete")) {
            checkContacts();
          };
        });
      };
      checkChanges();

      setTimeout(() => {
        showModalEdit();
        button.classList.remove("client__button-edit_load");
      }, 500);

      modalCloseEdit();
    };
  });

  deleteButton.addEventListener("click", async () => {
    const id = modalEdit.querySelector(".modal-edit__id").textContent.split(" ")[1];
    let deleteClient;
    const clients = document.querySelectorAll(".client");

    clients.forEach(client => {
      const deleteId = client.querySelector(".client__id").textContent;

      if (deleteId === id) {
        deleteClient = client;
      }
    });

    await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: "DELETE"
    });

    deleteClient.remove();
  });

  const patchServer = () => {
    const closeModal = () => {
      const labelUsers = modalEdit.querySelectorAll(".modal__label");
      const contactItems = modalEdit.querySelectorAll(".contacts__item");
      const contacts = modalEdit.querySelector(".modal__contacts");
      const contactsContent = modalEdit.querySelector(".contacts__content");
      const modalOverlay = document.querySelector(".modal-overlay");
      const button = modalEdit.querySelector(".contacts__add");

      modalEdit.classList.add("modal_close");

      modalOverlay.classList.remove("modal-overlay_active");
      modalEdit.classList.remove("modal_active");
      modalEdit.classList.remove("modal-registration_active");
      body.style.overflowY = "auto";
      contacts.classList.remove("contacts_active");
      contactsContent.classList.remove("contacts__content_active");

      if (button.classList.contains("contacts__add_hide")) {
        button.classList.remove("contacts__add_hide");
      }

      labelUsers.forEach(labelUser => {
        const input = labelUser.querySelector(".modal__input");
        const title = labelUser.querySelector(".modal__title");

        labelUser.classList.remove("modal__label_active");
        title.classList.remove("modal__title_active");
        input.classList.remove("modal__input_active");
        input.value = "";
      });

      contactItems.forEach(contactItem => {
        contactItem.remove();
      });
    };

    buttonSave.addEventListener("click", async (e) => {
      e.preventDefault();
      const id = modalEdit.querySelector(".modal-edit__id").textContent.split(" ")[1];
      const errorUsers = modalEdit.querySelectorAll(".modal__error").length;
      const errorContacts = modalEdit.querySelectorAll(".contacts__error").length;
      const checkErrors = () => {
        let answer = true;

        if (errorUsers + errorContacts !== 0) {
          answer = false;
        }
        return answer;
      };

      if (checkErrors()) {
        buttonSave.classList.remove(`number-click_${countClick}`);
        const forms = modalEdit.querySelectorAll(".contacts__form");
        const inputs = modalEdit.querySelectorAll(".modal__input");
        const infoUser = {
          surname: "",
          name: "",
          middlename: ""
        };
        const rightSend = (value) => {
          const convertedValue = value[0].toUpperCase() + value.slice(1).trim().toLowerCase();
          return convertedValue;
        };
        const infoContacts = [];

        if (forms.length !== 0) {
          for (let i = 0; i < forms.length; i++) {
            const form = forms[i];
            const input = form.querySelector(".contacts__input");
            const selectedType = form.querySelector(".choices__item--selectable");
            let contact = {};

            infoContacts.push(
              contact = {
                type: selectedType.textContent,
                value: input.value,
              }
            );
          }
        }

        inputs.forEach(input => {
          if (input.classList.contains("modal-edit__surname")) {
            infoUser.surname = rightSend(input.value);
          } else if (input.classList.contains("modal-edit__name")) {
            infoUser.name = rightSend(input.value);
          } else if (input.classList.contains("modal-edit__middlename")) {
            if (input.value !== "") {
              infoUser.middlename = rightSend(input.value);
            }
          }
        });

        const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            surname: infoUser.surname,
            name: infoUser.name,
            lastName: infoUser.middlename,
            contacts: infoContacts,
          }),
          headers: {"Content-Type": "application/json"},
        });

        if (response.status === 422 || response.status === 404 || response.status >= 500) {
          const serverError = modalEdit.querySelector(".contacts__error-server");

          serverError.textContent = `Ошибка: ${response.statusText}`;
          serverError.classList.add("contacts__error-server_active");
        } else if (response.status === 200 || response.status === 201) {
          const serverError = modalEdit.querySelector(".contacts__error-server");

          serverError.textContent = "";
          serverError.classList.remove("contacts__error-server_active");

          setTimeout(() => {
            closeModal();

            sortClients();
          }, 500)
        }
      }
    });
  };
  patchServer();
};

export async function sortClients (e) {
  const buttonsSort = document.querySelectorAll(".table__sort");
  let response = await fetch("http://localhost:3000/api/clients");
  let data = await response.json();
  let sortedClients = [];
  Object.assign(sortedClients, data);

  function sortId (type = "increase") {
    const sortedClientsId = [];

    data.forEach(sortedClient => {
      sortedClientsId.push(sortedClient.id);
    });

    if (type === "increase") {
      sortedClientsId.sort((a,b) => a - b);

      for (let i = 0; i < sortedClientsId.length; i++) {
        const sortedClientId = sortedClientsId[i];
        sortedClients.forEach(client => {
          if (client.id === sortedClientId) {
            const index = sortedClients.indexOf(client);
            const prevClient = sortedClients[i];
            sortedClients[i] = client;
            sortedClients[index] = prevClient;
          }
        });
      }
    } else if (type === "descending") {
      sortedClientsId.sort((a,b) => b - a);

      for (let i = 0; i < sortedClientsId.length; i++) {
        const sortedClientId = sortedClientsId[i];
        sortedClients.forEach(client => {
          if (client.id === sortedClientId) {
            const index = sortedClients.indexOf(client);
            const prevClient = sortedClients[i];
            sortedClients[i] = client;
            sortedClients[index] = prevClient;
          }
        });
      }
    }

    (async function () {
      addClients("click", sortedClients);
    }());
  };

  const sortName = (type = "descending") => {
    const sortedClientsInfo = []

    sortedClients.forEach(sortedClient => {
      sortedClientsInfo.push(`${sortedClient.surname} ${sortedClient.name} ${sortedClient.lastName}`);
    });

    if (type === "increase") {
      sortedClientsInfo.sort((a,b) => a > b ? 1:-1);

      for (let i = 0; i < sortedClients.length; i++) {
        const sortedClientFullname = sortedClientsInfo[i].split(" ");

        sortedClients.forEach(client => {
          if (client.surname === sortedClientFullname[0] &&
              client.name === sortedClientFullname[1] &&
              client.lastName === sortedClientFullname[2]) {
            const index = sortedClients.indexOf(client);
            const prevClient = sortedClients[i];
            sortedClients[i] = client;
            sortedClients[index] = prevClient;
          }
        });
      }
    } else if (type === "descending") {
      sortedClientsInfo.sort((a,b) => a < b ? 1:-1);

      for (let i = 0; i < sortedClients.length; i++) {
        const sortedClientFullname = sortedClientsInfo[i].split(" ");

        sortedClients.forEach(client => {
          if (client.surname === sortedClientFullname[0] &&
              client.name === sortedClientFullname[1] &&
              client.lastName === sortedClientFullname[2]) {
            const index = sortedClients.indexOf(client);
            const prevClient = sortedClients[i];
            sortedClients[i] = client;
            sortedClients[index] = prevClient;
          }
        });
      }
    }
    (async function () {
      addClients("click", sortedClients);
    }());
  };

  const sortDateCreate = (type = "descending") => {
    if (type === "increase") {
      for (let i = 0; i < sortedClients.length; i++) {
        for (let j = 0; j < sortedClients.length - 1 - i; j++){
          const currentClient = sortedClients[j];
          const nextClient = sortedClients[j+1];

          const currentDate = new Date(sortedClients[j].createdAt);
          const nextDate = new Date(sortedClients[j + 1].createdAt);

          if (currentDate > nextDate) {
            sortedClients[j] = nextClient;
            sortedClients[j+1]= currentClient;
          }
        }
      }
    } else if (type === "descending") {
      for (let i = 0; i < sortedClients.length; i++) {
        for (let j = 0; j < sortedClients.length - 1 - i; j++) {
          const currentClient = sortedClients[j];
          const nextClient = sortedClients[j+1];

          const currentDate = new Date(sortedClients[j].createdAt);
          const nextDate = new Date(sortedClients[j + 1].createdAt);

          if (currentDate < nextDate) {
            sortedClients[j] = nextClient;
            sortedClients[j+1]= currentClient;
          }
        }
      }
    }

    (async function () {
      addClients("click", sortedClients);
    }());
  };

  const sortDateUpdate = (type = "descending") => {
    if (type === "increase") {
      for (let i = 0; i < sortedClients.length; i++) {
        for (let j = 0; j < sortedClients.length - 1 - i; j++){
          const currentClient = sortedClients[j];
          const nextClient = sortedClients[j+1];

          const currentDate = new Date(sortedClients[j].updatedAt);
          const nextDate = new Date(sortedClients[j + 1].updatedAt);

          if (currentDate > nextDate) {
            sortedClients[j] = nextClient;
            sortedClients[j+1]= currentClient;
          }
        }
      }
    } else if (type === "descending") {
      for (let i = 0; i < sortedClients.length; i++) {
        for (let j = 0; j < sortedClients.length - 1 - i; j++) {
          const currentClient = sortedClients[j];
          const nextClient = sortedClients[j+1];

          const currentDate = new Date(sortedClients[j].updatedAt);
          const nextDate = new Date(sortedClients[j + 1].updatedAt);

          if (currentDate < nextDate) {
            sortedClients[j] = nextClient;
            sortedClients[j+1]= currentClient;
          }
        }
      }
    }

    (async function () {
      addClients("click", sortedClients);
    }());
  };

  if (clicker.typeSort === "id") {
    const button = document.querySelector(".table__button.is-id");
    if (button.classList.contains("is-increase")) {
      sortId("increase");
    } else if (button.classList.contains("is-descending")) {
      sortId("descending");
    }
  } else if (clicker.typeSort === "name") {
    const button = document.querySelector(".table__button.is-name");
    if (button.classList.contains("is-increase")) {
      sortName("increase");
    } else if (button.classList.contains("is-descending")) {
      sortName("descending");
    }
  } else if (clicker.typeSort === "dateCreate") {
    const button = document.querySelector(".table__button.is-date-create");
    if (button.classList.contains("is-increase")) {
      sortDateCreate("increase");
    } else if (button.classList.contains("is-descending")) {
      sortDateCreate("descending");
    }
  } else if (clicker.typeSort === "dateUpdate") {
    const button = document.querySelector(".table__button.is-date-update");
    if (button.classList.contains("is-increase")) {
      sortDateUpdate("increase");
    } else if (button.classList.contains("is-descending")) {
      sortDateUpdate("descending");
    }
  }

  if (e === "default") {
    (function () {
      buttonsSort.forEach(buttonSort => {
        buttonSort.addEventListener("click", async (e) => {
          e.preventDefault();
          response = await fetch("http://localhost:3000/api/clients");
          data = await response.json();
          sortedClients = [];
          Object.assign(sortedClients, data);

          if (clicker.currentButton === buttonSort) {
            clicker.amountClick+=1;
          } else {
            clicker.amountClick = 1;
            clicker.currentButton = buttonSort;
          }

          if (clicker.amountClick === 1) {
            buttonSort.classList.remove("is-descending");
            buttonSort.classList.add("is-increase");
          } else if (clicker.amountClick === 2) {
            buttonSort.classList.add("is-descending");
            buttonSort.classList.remove("is-increase");
            clicker.amountClick = 0;
          }

          if (buttonSort.classList.contains("is-id")) {
            clicker.typeSort = "id";
            if (buttonSort.classList.contains("is-increase")) {
              sortId("increase");
            } else if (buttonSort.classList.contains("is-descending")) {
              sortId("descending");
            }
          }

          if (buttonSort.classList.contains("is-name")) {
            clicker.typeSort = "name";
            if (buttonSort.classList.contains("is-increase")) {
              sortName("increase");
            } else if (buttonSort.classList.contains("is-descending")) {
              sortName("descending");
            }
          }

          if (buttonSort.classList.contains("is-date-create")) {

            clicker.typeSort = "dateCreate";
            if (buttonSort.classList.contains("is-increase")) {
              sortDateCreate("increase");
            } else if (buttonSort.classList.contains("is-descending")) {
              sortDateCreate("descending");
            }
          }

          if (buttonSort.classList.contains("is-date-update")) {
            clicker.typeSort = "dateUpdate"
            if (buttonSort.classList.contains("is-increase")) {
              sortDateUpdate("increase");
            } else if (buttonSort.classList.contains("is-descending")) {
              sortDateUpdate("descending");
            }
          }
        });
      });
    }());
  }
}

export function preloader () {
  (function preloaderTable () {
    const table = document.querySelector(".table__content");

    table.addEventListener("click", async e => {
      if (e.target.classList.contains("client__button-edit")) {
        const button = e.target;

        button.classList.add("client__button-edit_load");
      };
    });
  }());
}

export async function searchClient () {
  const searcher = document.querySelector(".header__search");
  let sendClietns = [];
  let timout;

  searcher.addEventListener("focus", () => {
    searcher.classList.add("header__search_focus");
  });

  searcher.addEventListener("blur", () => {
    searcher.classList.remove("header__search_focus");
  });

  const createPrompt = async (str) => {
    const response = await fetch("http://localhost:3000/api/clients");
    const data = await response.json();
    Object.assign(sendClietns, data);
    const clientsInfo = [];
    const pageUp = 38;
    const pageDown = 40;

    const clearPrompt = (list) => {
      list.classList.remove("prompts__list_active");

      Array.from(list.children).forEach(el => {
        el.remove();
      });
    };

    document.body.addEventListener("click", e => {
      const elPressed = e.target;
      const list = document.querySelector(".prompts__list");

      if (!elPressed.classList.contains("prompts__list", "prompts__list_active")) {
        clearPrompt(list);
      }
    });

    const walkingButtons = () => {
      document.addEventListener("keydown", e => {
        const list = document.querySelector(".prompts__list");
        const buttons = list.querySelectorAll(".prompts__button");
        if (e.keyCode === pageUp) {
          e.preventDefault();

          if (searcher.classList.contains("header__search_focus")) {
            buttons[buttons.length - 1].focus();
          } else {
            const buttonFocus = list.querySelector(".prompts__button_focus");
            const indexFocus = Array.from(buttons).indexOf(buttonFocus);

            if (indexFocus === 0) {
              buttons[buttons.length - 1].focus();
            } else {
              buttons[indexFocus - 1].focus();
            }
          }
        } else if (e.keyCode === pageDown) {
          e.preventDefault();

          if (searcher.classList.contains("header__search_focus")) {
            buttons[0].focus();
          } else {
            const buttonFocus = list.querySelector(".prompts__button_focus");
            const indexFocus = Array.from(buttons).indexOf(buttonFocus);

            if (indexFocus === buttons.length - 1) {
              buttons[0].focus();
            } else {
              buttons[indexFocus + 1].focus();
            }
          }
        }
      });
    }

    if (str !== "") {
      sendClietns.forEach(client => {
        const userInfo = `${client.surname} ${client.name} ${client.lastName}`;

        if (userInfo.includes(str)) {
          clientsInfo.push([`${client.name} ${client.surname}`, client.id]);
        }
      });
    }

    if (clientsInfo.length !== 0) {
      const listPrompt = document.querySelector(".prompts__list");
      listPrompt.classList.add("prompts__list_active");

      Array.from(listPrompt.children).forEach(el => {
        el.remove();
      });

      clientsInfo.forEach(clientInfo => {
        const item = document.createElement("li");
        const button = document.createElement("button");

        button.addEventListener("focus", () => {
          button.classList.add("prompts__button_focus");
        })

        button.addEventListener("blur", () => {
          button.classList.remove("prompts__button_focus");
        })

        button.addEventListener("click", () => {
          const clients = document.querySelectorAll(".client");
          searcher.value = "";
          clearPrompt(listPrompt);

          clients.forEach(client => {
            const id = client.querySelector(".client__id").textContent;

            if (id === clientInfo[1]) {
              client.scrollIntoView({behavior: "smooth"});
              client.classList.add("client_found");
            }
          });

          setTimeout(() => {
            clients.forEach(client => {
              if (client.classList.contains("client_found")) {
                client.classList.remove("client_found");
              }
            });
          }, 2000);
        });

        item.classList.add("prompts__item");
        button.classList.add("prompts__button", "btn-clear");

        button.textContent = clientInfo[0];
        item.append(button);

        listPrompt.append(item);
      });
    } else {
      const listPrompt = document.querySelector(".prompts__list");
      clearPrompt(listPrompt);
    }

    walkingButtons();
  }

  const startTimer = (value) => {
    timout = setTimeout(() => {
      createPrompt(value);
    }, 300);
  }
  const deleteTimout = () => {
    clearTimeout(timout);
  };

  searcher.addEventListener("input", (e) => {
    const valueInput = e.target.value.trim();
    deleteTimout();
    startTimer(valueInput);
  });
};

export const createClientCard = () => {
  const hashPage = location.hash;
  const body = document.body;
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");
  const card = document.querySelector(".card");
  const contactsHeading = document.querySelector(".card__heading");

  const backMain = () => {
    const contacts = document.querySelectorAll(".card__item");
    location.hash = "";
    header.classList.remove("header_hide");
    main.classList.remove("main_hide");
    body.classList.remove("show-card");
    card.classList.remove("card_active");
    contacts.forEach(contact => {
      contact.remove();
    });
    contactsHeading.style.display = "none";
  }

  const addCard = async () => {
    const response = await fetch(`http://localhost:3000/api/clients/${hashPage.split("-")[1]}`);
    const data = await response.json();
    const clientId = document.querySelector(".card__id");
    const clientSurname = document.querySelector(".info__surname");
    const clientName = document.querySelector(".info__name");
    const clientLastname = document.querySelector(".info__lastname");
    const contactsList = document.querySelector(".card__list");
    const createContacts = () => {
      if (data.contacts.length !== 0) {
        contactsHeading.style.display = "block";
        data.contacts.forEach(client => {
          const item = document.createElement("li");
          const type = document.createElement("span");
          const value = document.createElement("a");

          item.classList.add("card__item");
          type.classList.add("card__type");
          value.classList.add("card__value");

          type.textContent = `${client.type}: `;

          if (client.type = "Телефон") {
            value.textContent = client.value;
            value.setAttribute("href", `tel:${client.value}`);
          } else if (client.tpye = "Email") {
            value.textContent = client.value;
            value.setAttribute("href", `mailto:${client.value}`);
          } else {
            value.textContent = client.value;
            value.setAttribute("href", `${client.value}`);
          }

          item.append(type);
          item.append(value);
          contactsList.append(item);
        });
      } else {
        contactsHeading.style.display = "none";
      }
    }

    clientId.textContent = `id: ${data.id}`;
    clientSurname.textContent = data.surname;
    clientName.textContent = data.name;

    if (data.lastName !== "") {
      clientLastname.textContent = data.lastName;
    };

    createContacts();
  };

  if (hashPage !== "") {
    header.classList.add("header_hide");
    main.classList.add("main_hide");
    body.classList.add("show-card");
    card.classList.add("card_active");
    addCard();
  } else {
    backMain();
  }
};
