<?php
// Site setup
function dawndriving_setup()
{
     // add featured image to post types
    add_theme_support( 'post-thumbnails' );
    // Register navigation menus.
    register_nav_menus(
        array(
            'primary-menu' => esc_html__('Primary Menu', 'dawndriving'),
            'footer-menu' => esc_html__('Footer Menu', 'dawndriving')
        )
    );
}

add_action('after_setup_theme', 'dawndriving_setup');


// Stylesheets and Scripts

function add_theme_scripts()
{
    global $wp_query;


    // Styles
    wp_enqueue_style('bootstrap', get_stylesheet_directory_uri() . '/assets/css/bootstrap.css', array(), '1');
    wp_enqueue_style('slick', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css', array(), '1');
    wp_enqueue_style('styles', get_stylesheet_directory_uri() . '/assets/css/style.css', array(), '1');

    // Scripts
    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.5.1.min.js', array('jquery'), '3.5.1', true);
    wp_enqueue_script('popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', array('jquery'), '1.12.9', true);
    wp_enqueue_script('bootstrap', get_template_directory_uri() . '/assets/js/vendor/bootstrap.min.js', array('jquery'), '4.5.3', true);
    wp_enqueue_script('slick', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'), '1.8.1', true);
    wp_register_script('custom', get_stylesheet_directory_uri() . '/assets/js/custom.js', array('jquery'), '1.1', true);

    wp_enqueue_script('custom');
}

add_action('wp_enqueue_scripts', 'add_theme_scripts');


// Custom post type

function driving_lession_blog()
{
add_post_type_support( 'driving', 'thumbnail' );
  $args = array(
                          'labels' => array(

                            'name' => 'Driving lessions',
                            'singular_name' => 'driving lessions',
                            ),
                            'public' => true,
                            'has_archive' => true,
                            'menu_icon' => 'dashicons-car',
                            'supports' => array( 'title', 'editor', 'post-thumbnails' ),
);

  register_post_type( 'driving', $args);
}

add_action('init', 'driving_lession_blog');
