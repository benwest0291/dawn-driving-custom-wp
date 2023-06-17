<?php
/* Template Name: Contact */
get_header();
render_masthead("contact_banner");
$form = get_field("contact_form");
$location = get_field("map_location");

if ($form != null) {
    $formShortcode = '[contact-form-7 id="' . $form->ID . '"]';
}
?>

<section class="contact">
    <div class="container">
        <div class="row">

            <div class="col-12 col-md-8">
                <?php if ($formShortcode != null) {
                    echo do_shortcode($formShortcode);
                } ?>
            </div>

            <div class="col-12 col-md-4">
                <div class="contact__information">

                </div>
            </div>
        </div>
    </div>
</section>

<!--ACF MAP -->

<?php
if ($location) : ?>
    <div class="acf-map" data-zoom="16">
        <div class="marker" data-lat="<?php echo esc_attr($location['lat']); ?>" data-lng="<?php echo esc_attr($location['lng']); ?>"></div>
    </div>
<?php endif; ?>


<script type="text/javascript">
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
                icon: 'http://dawn-driving-tuition-v3.local/wp-content/uploads/2023/06/icon.svg'
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
</script>

<?php
get_footer();
