<?php
/**
 *
 * Stylesheets and Scripts
 *
 */
function add_theme_scripts()
{
    $mapKey = get_theme_mod('map_api_key');

    // Styles
    wp_enqueue_style('bootstrap', get_stylesheet_directory_uri() . '/assets/css/bootstrap.css', array(), '1.1');
    wp_enqueue_style('slick', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css', array(), '1.1');
    wp_enqueue_style('styles', get_stylesheet_directory_uri() . '/assets/css/styles.css', array(), '1.2');

    // Scripts
    wp_enqueue_script('google', 'https://maps.googleapis.com/maps/api/js?key=' . $mapKey, array('jquery'), '1', true);
    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.5.1.min.js', array(), '3.5.1', true);
    wp_enqueue_script('popper', 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', array('jquery'), '2.11.6', true);
    wp_enqueue_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js', array('jquery'), '5.2.3', true);
    wp_enqueue_script('slick', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.js', array('jquery'), '1.8.1', true);
    wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/assets/js/custom/custom.js', array('jquery'), '1.3', true);

    wp_enqueue_script('font-awesome', 'https://kit.fontawesome.com/ff41bfe92a.js', array(), '6.2.0', true);

    wp_localize_script("custom", "projectUrl", array(
        "root_url" => get_site_url(),
    ));
}

add_action('wp_enqueue_scripts', 'add_theme_scripts');




/**
 *
 * Load More Superstars
 *
 */

 // Add this in your functions.php file

// Add this in your functions.php file

function load_more_superstars_script() { ?>
   <script>
        jQuery(document).ready(function ($) {
            var page = 2;

            $('#js-load-more').on('click', function () {
                $.ajax({
                    url: '<?php echo admin_url('admin-ajax.php'); ?>',
                    type: 'post',
                    data: {
                        action: 'load_more_superstars',
                        page: page,
                    },
                    success: function (response) {
                        var newItems = $(response).hide(); // Hide the new items initially
                        $('#superstars-container .row').append(newItems);

                        // Trigger the sequential fade-in animation for the newly added items
                        newItems.each(function (index) {
                            $(this).delay(index * 200).fadeIn(500);
                        });

                        page++;

                        // Check if there are more posts
                        if (response.trim() === '') {
                            $('#js-load-more').prop('disabled', true).text('Sorry No More Superstars To Load');
                        }
                    }
                });
            });
        });
    </script>
<?php
}

add_action('wp_footer', 'load_more_superstars_script', 99);

function load_more_superstars() {
    $page = $_POST['page'];

    $superstars = new WP_Query(array(
        "posts_per_page" => 3,
        "post_type" => "superstars",
        "orderby" => "meta_value_num",
        "order" => "DSC",
        "paged" => $page,
    ));

    ob_start();

    while ($superstars->have_posts()) {
        $superstars->the_post(); ?>
         <div class="col-12 col-lg-4 superstar-item fade-in">
            <?php get_template_part("inc/partials/superstar-card"); ?>
        </div>
    <?php }

    wp_reset_postdata();
    
    $output = ob_get_clean();

    echo $output;
    wp_die();
}

add_action('wp_ajax_load_more_superstars', 'load_more_superstars');
add_action('wp_ajax_nopriv_load_more_superstars', 'load_more_superstars');


/**
 *
 * Site setup
 *
 */
function dawn_driving_setup()
{
    // Register navigation menus.
    register_nav_menus(
    array(
        'header' => esc_html__('Header Menu', 'dawndriving'),
        'footer' => esc_html__('Footer Menu', 'dawndriving'),
        )
    );
}

add_action("after_setup_theme", "dawn_driving_setup");

/**
 *
 * Register Customizer Fields
 *
 */
require_once(get_template_directory() . '/inc/customizer.php');


/**
 *
 * Register Custom Post Types
 *
 */
require_once(get_template_directory() . '/inc/post-types/superstars.php');



/**
 *
 * Allow SVG Upload
 *
 */

function allow_svg_upload( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'allow_svg_upload' );

// Enable SVG file preview in media library
function svg_media_library( $response, $attachment, $meta ) {
    if ( $response['mime'] === 'image/svg+xml' ) {
        $response['sizes']['thumbnail'] = [
            'url' => $response['url'],
            'width' => $response['width'],
            'height' => $response['height'],
        ];
        $response['sizes']['full'] = [
            'url' => $response['url'],
            'width' => $response['width'],
            'height' => $response['height'],
        ];
    }
    return $response;
}
add_filter( 'wp_prepare_attachment_for_js', 'svg_media_library', 10, 3 );

/**
 *
 * Show featured images
 *
 */

add_action( 'after_setup_theme', 'cxc_add_post_thumbnail_supports', 99 );
function cxc_add_post_thumbnail_supports() {
    add_theme_support( 'post-thumbnails' );
}



/**
 *
 * Add Options to WP admin
 *
 */
if( function_exists('acf_add_options_page') ) {

    acf_add_options_page();

}

/**
 *
 * Reusable blocks
 *
 */

/**
 *
 * Masthead
 *
 */
function render_lower_banner($prefix = "", $args = array())
{
    $defaults = array(
        "background_image" => get_field($prefix . "_background_image"),
        "main_heading" => get_field($prefix . "_main_heading"),
        "button_text" => get_field($prefix . "_button_text"),
        "button_link" => get_field($prefix . "_button_link"),
    );

    $data = array_merge($defaults, $args);

    include(get_template_directory() . "/inc/blocks/lower-banner.php");
    unset($data);
}

/**
 *
 * Banner
 *
 */
function render_banner($prefix = "", $args = array())
{

    $defaults = array(
        "heading" => get_field($prefix . "_heading"),
        "background_image" => get_field($prefix . "_background_image"),
        "credential" => get_field($prefix . "_credential"),
        "banner_left" => get_field($prefix . "_banner_left"),
    );

    $data = array_merge($defaults, $args);

    include(get_template_directory() . "/inc/blocks/banner.php");
    unset($data);
}

/**
 *
 * Google Maps
 *
 */
function my_acf_google_map_api($api)
{
    $mapKey = get_theme_mod('map_api_key');
    $api['key'] = $mapKey;
    return $api;

}
add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');



