<?php

// Site setup

function of_setup()
{
    // Register navigation menus.
    register_nav_menus(
        array(
            'header' => esc_html__('Header Menu', 'of'),
            'footer_col_1' => esc_html__('Footer Column 1 Menu', 'of'),
            'footer_col_2' => esc_html__('Footer Column 2 Menu', 'of'),
            'footer_col_3' => esc_html__('Footer Column 3 Menu', 'of'),
            'footer_col_4' => esc_html__('Footer Column 4 Menu', 'of'),
            'legal_links' => esc_html__('Legal Links', 'of')
        )
    );

    add_theme_support('post-thumbnails');

    // Image Crops
    add_image_size('news', 976, 560, true);
    add_image_size('bag_download', 400, 560, true);
}

add_action('after_setup_theme', 'of_setup');

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

?>
