<?php

function bw_customizer_settings($wp_customize)
{
    /**
     * Company Details
     **/
    // Add Company Details Section
    $wp_customize->add_section('company_details', array(
        'title' => 'Company Details',
        'description' => '',
        'priority' => 30,
    ));
    // Contact Email
    $wp_customize->add_setting('contact_email');
    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'contact_email',
        array(
            'label' => 'Contact Email',
            'section' => 'company_details',
            'settings' => 'contact_email',
            'type' => 'text'
        )));
    // Contact Telephone Number
    $wp_customize->add_setting('contact_telephone');
    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'contact_telephone',
        array(
            'label' => 'Contact Telephone Number',
            'section' => 'company_details',
            'settings' => 'contact_telephone',
            'type' => 'text'
        )));

    // footer
    $wp_customize->add_setting('footer_text');
    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'footer_text',
        array(
            'label' => 'Footer text',
            'section' => 'company_details',
            'settings' => 'footer_text',
            'type' => 'textarea'
        )));

    /**
     * Social Settings
     */
    // Add Site Settings
    $wp_customize->add_section('social', array(
        'title' => 'Social Settings',
        'description' => '',
        'priority' => 45,
    ));
    $wp_customize->add_setting('facebook_url');
    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'facebook_url',
        array(
            'label' => 'Facebook URL',
            'section' => 'social',
            'settings' => 'facebook_url',
            'type' => 'text'
        )));
    $wp_customize->add_setting('instagram_url');
    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'instagram_url',
        array(
            'label' => 'Instagram URL',
            'section' => 'social',
            'settings' => 'instagram_url',
            'type' => 'text'
        )));
    $wp_customize->add_setting('twitter_url');
    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'twitter_url',
        array(
            'label' => 'Twitter URL',
            'section' => 'social',
            'settings' => 'twitter_url',
            'type' => 'text'
        )));
    /**
     * Map Settings
     */
    // Add Site Settings
    $wp_customize->add_section('map_settings', array(
        'title' => 'Map Settings',
        'description' => '',
        'priority' => 50,
    ));
    // Map API key
    $wp_customize->add_setting('map_api_key');
    $wp_customize->add_control(new WP_Customize_Control(
        $wp_customize,
        'map_api_key',
        array(
            'label' => 'Google Maps API Key',
            'section' => 'map_settings',
            'settings' => 'map_api_key',
            'type' => 'text'
        )
    ));

    /**
     * 404 Settings
     */
    // Add Site Settings
    $wp_customize->add_section('error', array(
        'title' => 'Error Settings',
        'description' => '',
        'priority' => 45,
    ));
    $wp_customize->add_setting('error_settings');
    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'error_settings',
        array(
            'label' => '404 Error',
            'section' => 'error',
            'settings' => 'error_settings',
            'type' => 'text'
        )));

    function themeslug_sanitize_dropdown_pages( $page_id, $setting ) {
        $page_id = absint( $page_id );
        return ( 'publish' == get_post_status( $page_id ) ? $page_id : $setting->default );
    }
}

add_action('customize_register', 'bw_customizer_settings');