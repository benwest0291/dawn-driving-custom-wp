// FAQ accordion
const faqBars = document.querySelectorAll(".js-faq-bar");

faqBars.forEach(faqBar => {

    faqBar.addEventListener("click", () => {
        faqBar.classList.toggle("active");
        const topBar = faqBar.querySelector(".js-faq__top")
        console.log(topBar);
        const answer = faqBar.querySelector(".js-faq__answer");
        const chevron = faqBar.querySelector(".js-faq__chevron");
        answer.classList.toggle("active");
        chevron.classList.toggle("rotate");
        topBar.classList.toggle("topbar__active");
    });
});