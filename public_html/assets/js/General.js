/* Effect on scroll*/

let scroll = (element, className, indice) => {
  let screenPosition = window.innerHeight / indice;

  if (element != undefined) {
    let positionSection = element.getBoundingClientRect().top;
    if (positionSection < screenPosition) {
      element.classList.add(className);
      callScrollAnimation[removeScroll] = "";

    }
  }
};

/* Add class animation*/
let animationOut = (element, Class, Time) => {
  return setTimeout(() => {
    element.classList.add(Class);
  }, Time);
};

/* Menu Mobile */
let triggerMenuMobile = (() => {
  var navigation = document
    .getElementsByClassName("nav_mobile")[0]
    .querySelector("div");
  var burger = document.getElementById("burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("cross");
    var wrapper = document.getElementsByClassName("submenu_mobile_header")[0];
    wrapper.classList.toggle("overlay_on");
  });
})();

export {
  scroll,
  animationOut,
  triggerMenuMobile
};