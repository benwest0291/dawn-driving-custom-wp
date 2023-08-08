// Mobile Navigation
const burger = document.querySelector(".navigation__burger");

const navSlide = () => {
    const nav = document.querySelector(".header__links__container");
    nav.classList.toggle("js__links__open");
    burger.classList.toggle("toggle");
}

burger.addEventListener("click", navSlide);


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

    (function($) {

    /**
     * initMap
     *
     * Renders a Google Map onto the selected jQuery element
     *
     * @date    22/10/19
     * @since   5.8.6
     *
     * @param   jQuery $el The jQuery element.
     * @return  object The map instance.
     */
    function initMap($el) {

        // Find marker elements within map.
        var $markers = $el.find('.marker');

        // Create gerenic map.
        var mapArgs = {
            zoom: $el.data('zoom') || 200,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapId: '2861c6ec8cac716d', //Map style from google console
            scrollwheel: false


        };
        var map = new google.maps.Map($el[0], mapArgs);

        // Add markers.

        map.markers = [];
        $markers.each(function() {
            initMarker($(this), map);
        });

        // Center map based on markers.
        centerMap(map);

        // Return map instance.
        return map;
    }

    /**
     * initMarker
     *
     * Creates a marker for the given jQuery element and map.
     *
     * @date    22/10/19
     * @since   5.8.6
     *
     * @param   jQuery $el The jQuery element.
     * @param   object The map instance.
     * @return  object The marker instance.
     */
    function initMarker($marker, map) {

    // Get position from marker.
    var lat = $marker.data('lat');
    var lng = $marker.data('lng');
    var latLng = {
    lat: parseFloat(lat),
    lng: parseFloat(lng)
};


    google.maps.event.trigger(map, 'resize');

    // // Create marker instance.
    var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: 'Dawn Driving Tuition',
    icon: 'http://dawn-driving.local/wp-content/uploads/2023/08/icon.svg'
});



    // Append to reference for later use.
    map.markers.push(marker);

    // If marker contains HTML, add it to an infoWindow.
    if ($marker.html()) {

    // Create info window.
    var infowindow = new google.maps.InfoWindow({
    content: $marker.html()
});

    // Show info window when marker is clicked.
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
});
}
}

    /**
     * centerMap
     *
     * Centers the map showing all markers in view.
     *
     * @date    22/10/19
     * @since   5.8.6
     *
     * @param   object The map instance.
     * @return  void
     */
    function centerMap(map) {

    // Create map boundaries from all map markers.
    var bounds = new google.maps.LatLngBounds();
    map.markers.forEach(function(marker) {
    bounds.extend({
    lat: marker.position.lat(),
    lng: marker.position.lng()
});
});

    // Case: Single marker.
    if (map.markers.length == 1) {
    map.setCenter(bounds.getCenter());

    // Case: Multiple markers.
} else {
    map.fitBounds(bounds);
}
}

    // Render maps on page load.
    $(document).ready(function() {
    $('.acf-map').each(function() {
    var map = initMap($(this));
});
});

})(jQuery);
