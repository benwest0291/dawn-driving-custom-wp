// Mobile Navigation
const burger = document.querySelector(".navigation__burger");

const navSlide = () => {
    const nav = document.querySelector(".header__links__container");
    nav.classList.toggle("js__links__open");
    burger.classList.toggle("toggle");
}

burger.addEventListener("click", navSlide);

//Sliders
jQuery(function ($) {
    // Superstars slider
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
    // News slider
    $('.card__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
});

// Accordion arrow animation

let accordionHeaders = document.querySelectorAll('.accordion__header');
accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
        // Find the arrow icon inside the header
        let arrowIcon = header.querySelector('.accordion__arrow');

        // Toggle the 'rotate' class on the arrow icon
        arrowIcon.classList.toggle('rotate');

        // Find all the other arrow icons and remove the 'rotate' class from them
        let otherArrowIcons = document.querySelectorAll('.accordion__arrow:not(.rotate)');
        otherArrowIcons.forEach(function (icon) {
            icon.classList.remove('rotate');
        });
    });
});