<?php
/**
 *
 * Stylesheets and Scripts
 *
 */
function add_theme_scripts()
{
    // Styles
    wp_enqueue_style('bootstrap', get_stylesheet_directory_uri() . '/assets/css/bootstrap.css', array(), '1.1');
    wp_enqueue_style('slick', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css', array(), '1.1');
    wp_enqueue_style('styles', get_stylesheet_directory_uri() . '/assets/css/styles.css', array(), '1.2');

    // Scripts
    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.5.1.min.js', array(), '3.5.1', true);
    wp_enqueue_script('popper', 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', array('jquery'), '2.11.6', true);
    wp_enqueue_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js', array('jquery'), '5.2.3', true);
    wp_enqueue_script('slick', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.js', array('jquery'), '1.8.1', true);
    wp_register_script('custom', get_stylesheet_directory_uri() . '/assets/js/custom.js', array('jquery'), '1.2', true);

    wp_enqueue_script('font-awesome', 'https://kit.fontawesome.com/ff41bfe92a.js', array(), '6.2.0', true);
}

add_action('wp_enqueue_scripts', 'add_theme_scripts');

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
 * Register Custom Post Types
 *
 */
require_once(get_template_directory() . '/inc/post-types/superstars.php');

/**
 *
 * Register Customizer Fields
 *
 */
require_once(get_template_directory() . '/inc/customizer.php');


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
function render_masthead($prefix = "", $args = array())
{
    $defaults = array(
        "masthead_top_heading" => get_field($prefix . "_masthead_top_heading"),
        "masthead_main_heading" => get_field($prefix . "_masthead_main_heading"),
        "masthead_content" => get_field($prefix . "_masthead_content"),
        "masthead_button_one_text" => get_field($prefix . "_masthead_button_one_text"),
        "masthead_button_one_link" => get_field($prefix . "_masthead_button_one_link"),
        "masthead_button_two_text" => get_field($prefix . "_masthead_button_two_text"),
        "masthead_button_two_link" => get_field($prefix . "_masthead_button_two_link"),
        "masthead_image" => get_field($prefix . "_masthead_image")
    );

    $data = array_merge($defaults, $args);

    include(get_template_directory() . "/inc/blocks/masthead.php");
    unset($data);
}

/**
 *
 * Text Block
 *
 */
function render_text($prefix = "", $args = array())
{
    $defaults = array(
        "text_heading" => get_field($prefix . "_text_heading"),
        "text_content" => get_field($prefix . "_text_content"),
    );

    $data = array_merge($defaults, $args);

    include(get_template_directory() . "/inc/blocks/text.php");
    unset($data);
}