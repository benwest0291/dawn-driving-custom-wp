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