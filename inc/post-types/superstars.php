<?php
function dawn_driving_post_types()
{
    register_post_type("superstars", array(
        "supports" => array("title", "editor", "page-attributes", "excerpt", "thumbnail"),
        "rewrite" => array("slug" => "superstars"), // Customize the slug as needed
        "has_archive" => false,
        "public" => true,
        "show_in_rest" => false,
        "labels" => array(
            "name" => "SuperStars",
            "add_new_item" => "Add New Super Star",
            "edit_item" => "Edit Superstar",
            "all_items" => "All Superstars",
            "singular_name" => "Superstar"
        ),
        "menu_icon" => "dashicons-car"
    ));
}

add_action("init", "dawn_driving_post_types");
