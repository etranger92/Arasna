import {
  scroll,
  animationOut,
  triggerMenuMobile
} from "./General.js";
triggerMenuMobile;


const ERROR_MESSAGE = {
  defaultFormat: "Oups, something was wrong. Try to use only characters such: letters and numbers",
  email: "The email provided does not match the standart format",
};

const LOCATION_FIELDS = {
  firstName: document.getElementById("first-name"),
  lastName: document.getElementById("last-name"),
  email: document.getElementById("email"),
  about: document.getElementById("subject"),
};

let checkEntry = {
  formatEntry() {
    let field = event.target;
    let entry = field.value;
    let doesItMatchRegex = REGEX.defaultFormat.test(entry);
    if (entry && !doesItMatchRegex) {
      field.classList.add("border_error");
      throwErrorMessage(ERROR_MESSAGE.defaultFormat, field.nextElementSibling);
    } else {
      removeErrorMessage(field);
    }
  },
  email() {
    let field = event.target;
    let entry = field.value;
    let doesItMatchRegex = REGEX.email.test(entry);
    if (entry && !doesItMatchRegex) {
      field.classList.add("border_error");
      throwErrorMessage(ERROR_MESSAGE.email, field.nextElementSibling);
    } else {
      removeErrorMessage(field);
    }
  },
  textArea() {
    let field = event.target;
    let entry = field.value;
    let doesItMatchRegex = REGEX.textArea.test(entry);
    if (entry && !doesItMatchRegex) {
      field.classList.add("border_error");
      throwErrorMessage(ERROR_MESSAGE.defaultFormat, field.nextElementSibling);
    } else {
      removeErrorMessage(field);
    }
  },
};

let eventFields = (() => {
  LOCATION_FIELDS.email.addEventListener("blur", (event) =>
    checkEntry.email(event)
  );
  LOCATION_FIELDS.firstName.addEventListener("blur", (event) =>
    checkEntry.formatEntry(event)
  );
  LOCATION_FIELDS.lastName.addEventListener("blur", (event) =>
    checkEntry.formatEntry(event)
  );
  LOCATION_FIELDS.about.addEventListener("blur", (event) =>
    checkEntry.textArea(event)
  );
})();

let sectionProjectsAnimation = {
  indicePics: 1,
  init() {
    sectionProjectsAnimation.formEffect();
  },
  formEffect() {
    let formGetInTouch = document.getElementsByClassName("form")[0];
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // coverAnimation.init(),
});
window.addEventListener("scroll", () => {
  sectionProjectsAnimation.init();
});
window.onload = () => {
  let loader = document.getElementById("loader_content");
  loader.classList.add("loader_hide");
};