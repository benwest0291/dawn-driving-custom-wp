<?php
/**
 *
 * Stylesheets and Scripts
 *
 */
function dawn_driving_files()
{
	global $wp_query;
	$mapKey = get_theme_mod('map_api_key');

	// Styles
	wp_enqueue_style('bootstrap', get_stylesheet_directory_uri() . '/assets/css/bootstrap.css', array(), '1');
	wp_enqueue_style("font-awesome", "//cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
	wp_enqueue_style("dawn_driving_main_styles", get_theme_file_uri("assets/css/style.css"));

	// Scripts
	wp_enqueue_script('googlMaps', 'https://maps.googleapis.com/maps/api/js?key=' . $mapKey, array('jquery'), '1', true);
	wp_enqueue_script("dawn-driving-js", get_theme_file_uri("assets/js/custom.js"), array("jquery"), "1.0", true);
	wp_enqueue_script('bootstrap', get_template_directory_uri() . '/assets/js/vendor/bootstrap.min.js', array('jquery'), '4.5.3', true);

}


add_action("wp_enqueue_scripts", "dawn_driving_files");

/**
 *
 * Site setup
 *
 */
function dawn_driving_setup()
{
	register_nav_menu("headerMenu", "Header Menu Location");
	register_nav_menu("footerMenuNews", "Footer Menu News");
	register_nav_menu("footerMenuBlog", "Footer Menu Blog");
	register_nav_menu("footerNav", "Footer Navigation");

	add_theme_support("title-tag");
	add_theme_support("post-thumbnails");
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
 * Render Masthead
 *
 */
function render_masthead($prefix = "", $args = array())
{
	$defaults = array(
        "masthead_subheading" => get_field($prefix . "_masthead_subheading"),
		"masthead_heading" => get_field($prefix . "_masthead_heading"),
		"masthead_button" => get_field($prefix . "_masthead_button"),
		"masthead_button_url" => get_field($prefix . "_masthead_button_url"),
        "masthead_image" => get_field($prefix . "_masthead_image"),
	);

	$data = array_merge($defaults, $args);

	include(get_template_directory() . "/inc/blocks/masthead.php");
	unset($data);
}

/**
 *
 * Google Maps
 *
 */

function my_acf_google_map_api($api)
{
	$api['key'] = '$mapKey';
	return $api;
}
add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');