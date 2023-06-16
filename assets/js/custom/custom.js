// FAQ accordion
const faqBars = document.querySelectorAll('.js-faq-bar');

faqBars.forEach(faqBar => {

    faqBar.addEventListener('click', () => {
        faqBar.classList.toggle('active');
        const answer = faqBar.querySelector('.js-faq__answer');
        const chevron = faqBar.querySelector('.js-faq__chevron');
        answer.classList.toggle('active');
        chevron.classList.toggle('rotate');
    });
});