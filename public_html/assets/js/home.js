import {
    scroll,
    animationOut,
    triggerMenuMobile
} from "./General.js";
triggerMenuMobile


/**************************************LIBRARY ****************************/
//Jquery import 
/*
import jQuery from "../vendors/jquery/jquery.js";
window.$ = window.jQuery = jQuery;*/
// Caroussel Slicker
$(function carrousel() {
    $(".multiple-items").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: false,
        dots: true,
        responsive: [{
                breakpoint: 800,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: "10px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: "10px",
                    slidesToShow: 1,
                },
            },
        ],
    });
});
const LOCATION_FIELDS = {
    hovers: [...document.getElementsByClassName("hover_website")],
};
let displayAnimationBody = {
    init() {
        displayAnimationBody.whyChooseUs();
        displayAnimationBody.pub_one();
        displayAnimationBody.pub_two();
        displayAnimationBody.webSitePresentation();
        displayAnimationBody.wordFromUs();
    },
    whyChooseUs() {
        let chooseUs2 = [...document.getElementsByClassName("choose_us_2")][0];
        let chooseUs1 = [...document.getElementsByClassName("choose_us_1")];

        scroll(chooseUs2, "choose_us_fade_fadeRight", 1.2);
        if (chooseUs2.classList.contains("choose_us_fade_fadeRight"))
            chooseUs1 = chooseUs1.map(element =>
                element.classList.add("choose_us_fade_bottom")
            );
    },
    pub_one() {
        let quote = document.querySelector(
            "body > div.sections_content > section.pubs.pub_one.wave-container > div"
        );
        scroll(quote, "pub_effect_zoom", 1.2);
    },
    pub_two() {
        let quote = document.querySelector(
            "body > div.sections_content > section.pubs.pub_two > div"
        );
        scroll(quote, "pub_effect_zoom", 1.2);
    },
    webSitePresentation() {
        let title = document.querySelector(
            "body > div.sections_content > section.website_presentation > div.titles.web_pres_title"
        );
        let articles = [...document.getElementsByClassName("web_article")];
        scroll(title, "fadeLeft", 1.3);
        if (title.classList.contains("fadeLeft"))
            articles = articles.map((element) =>
                element.classList.add("fade_right_articles")
            );
    },
    wordFromUs() {
        let paraWord = [...document.getElementsByClassName("para_word")];
        let pic = document.querySelector(
            "body > div.sections_content > section.word_from_us > div.buble_plus_phone > img.tech_pic_upon_buble.opacity_0"
        );
        scroll(pic, "fade_right2", 1);
        let title = document.querySelector(
            "body > div.sections_content > section.word_from_us > div.word_text > h2"
        );
        scroll(title, "fade_bottom", 1);
        if (title.classList.contains("fade_bottom"))
            paraWord = paraWord.map((element) =>
                element.classList.add("fade_bottom2")
            );
    },
};

let eventFields = (() => {
    LOCATION_FIELDS.hovers.forEach((hover) =>
            hover.addEventListener("mouseover", (event) => {
                event.stopPropagation();
                let target = event.target.getAttribute("class");
                if (target == "hover_website") {
                    let bothPartsHover = [...event.target.querySelectorAll(".in_hover")];
                    animationOut(bothPartsHover[0], "fadeUp");
                    animationOut(bothPartsHover[1], "fadeDown");
                }
            })
        ),
        LOCATION_FIELDS.hovers.forEach((hover) =>
            hover.addEventListener("mouseleave", (event) => {
                /* Could have set to the parent and use bubbling effect)*/
                event.stopPropagation();
                let target = event.target.getAttribute("class");
                if (target == "hover_website") {
                    let bothPartsHover = [...event.target.querySelectorAll(".in_hover")];
                    bothPartsHover[0].classList.remove("fadeUp");
                    bothPartsHover[1].classList.remove("fadeDown");
                }
            })
        );
})();

window.addEventListener("scroll", () => {
    displayAnimationBody.init();
});


window.onload = () => {
    let loader = document.getElementById("loader_content");
    loader.classList.add("loader_hide");
};