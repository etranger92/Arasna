import {
    scroll,
    animationOut,
    triggerMenuMobile
} from "./General.js";
triggerMenuMobile;



const LOCATION_FIELDS = {
    steps: [...document.getElementsByClassName("titles_step")],
}

let eventFields = (() => {
    LOCATION_FIELDS.steps.forEach(step => step.addEventListener("click", event => {
        let sourceOfClick = event.currentTarget;
        sourceOfClick.classList.add("add_background");
        let indice = sourceOfClick.getAttribute("value");
        displayAnimationBody.displayArticlesForSteps(indice);
    }))
})();


let displayAnimationBody = {
    init() {},
    displayArticlesForSteps(indice) {
        let removeClassOfDivsNotSelected = LOCATION_FIELDS.steps.map(step => {
            let indicesOfDiv = step.getAttribute("value");
            if (indicesOfDiv != indice) {
                step.classList.remove("add_background");
            }
        })

        const markupSlidersArticle = [`
        <article >
        <div class="titles_info_steps">
        <h4>We get in touch</h4>
        <h2 class="titles">Determine your goal</h2>
        </div>
        <p> This stage, the stage of discovering and researching, determines how the subsequent steps will look like. The most important task at this point is to get a clear understanding of your future website purposes, the main goals you wish to get, and the target audience you want to attract to your site. Such kind of a website development questionnaire helps to develop the best strategy for further project management.
        </p>
    </article>
 `, `
 <article>
 <div class="titles_info_steps">
 <h4>We create the plan</h4>
 <h2 class="titles">Plan</h2>
 </div>
 <p> At this stage of the website development cycle, the developer creates the data that allow a customer to judge how the entire site will look like.

 Based on the information that was gathered together in the previous phase, the sitemap is created. Here is the sitemap of the XB Software website:

 </p>
</article>
`, `
<article >
<div class="titles_info_steps">
<h4> Page layouts, review</h4>
<h2 class="titles"> Design</h2>
</div>
<p> During the design phase, your website takes shape. All the visual content, such as images, photos, and videos is created at this step. Once again, all the info that was gathered through the first phase is crucial. The customer and target audience must be kept in mind while you work on a design.
<br>
The website layout is the result of a designer’s work. It can be a graphic sketch or an actual graphic design.The primary function of the layout is to represent the information structure, visualize the content, and demonstrate the basic functionality. Layouts contain colors, logos, images and can give a general understanding of the future product.

After that, the customer can review the layout and send you his feedback. If the client is not sure about some aspects of your design, you should change the layout and send it back to him. This cycle should be repeated until the customer is completely satisfied.

</p>
</article>
`, `
<article >
<div class="titles_info_steps">
<h4>Your website will be live! </h4>
<h2 class="titles">Lunch</h2>
</div>
<p> Once your website is ready to go live, we work on your chosen hosting solution to push the
    website live and perform a comprehensive Q&A of the site.

    As part of your web project with us we offer 3 months of hosting on our managed dedicated
    server, this provides an excellent opportunity to get your website live quickly (should you not
    have a chosen provider in place) and also experience our powerful managed hosting solution.

</p>
</article>
`];
        let parentOfArticle = document.getElementsByClassName("steps_info")[0];
        parentOfArticle.innerHTML = markupSlidersArticle[indice];
    }

};


window.addEventListener('scroll', () => {});
document.addEventListener("DOMContentLoaded", () => {
    displayAnimationBody.init();
})
window.onload = () => {
    let loader = document.getElementById("loader_content");
    loader.classList.add("loader_hide");
};