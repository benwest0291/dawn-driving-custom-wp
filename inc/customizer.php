<?php

function dawndriving_customizer_settings($wp_customize)
{
    /**
     * Site Identity Settings
     */
    // Logo
    $wp_customize->add_setting('company_logo');
    $wp_customize->add_control(new WP_Customize_Image_Control(
        $wp_customize,
        'company_logo',
        array(
            'label' => 'Company Logo',
            'section' => 'title_tagline',
            'settings' => 'company_logo',
        )
    ));
    /**
     * Company Details
     */
    // Add Company Details Section
    $wp_customize->add_section('company_details', array(
        'title' => 'Company Details',
        'description' => '',
        'priority' => 30,
    ));
    // Contact Email
    $wp_customize->add_setting('contact_email');
    $wp_customize->add_control(new WP_Customize_Control(
        $wp_customize,
        'contact_email',
        array(
            'label' => 'Contact Email',
            'section' => 'company_details',
            'settings' => 'contact_email',
            'type' => 'text'
        )
    ));
    // Contact Telephone Number
    $wp_customize->add_setting('contact_telephone');
    $wp_customize->add_control(new WP_Customize_Control(
        $wp_customize,
        'contact_telephone',
        array(
            'label' => 'Contact Telephone Number',
            'section' => 'company_details',
            'settings' => 'contact_telephone',
            'type' => 'text'
        )
    ));
    // facebook
    $wp_customize->add_setting('facebook');
    $wp_customize->add_control(new WP_Customize_Control(
        $wp_customize,
        'facebook',
        array(
            'label' => 'Facebook url',
            'section' => 'company_details',
            'settings' => 'facebook',
            'type' => 'text'
        )
    ));

    // instagram
    $wp_customize->add_setting('instagram');
    $wp_customize->add_control(new WP_Customize_Control(
        $wp_customize,
        'instagram',
        array(
            'label' => 'Instagram url',
            'section' => 'company_details',
            'settings' => 'instagram',
            'type' => 'text'
        )
    ));

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

    function themeslug_sanitize_dropdown_pages($page_id, $setting)
    {
        $page_id = absint($page_id);
        return ('publish' == get_post_status($page_id) ? $page_id : $setting->default);
    }
}

add_action('customize_register', 'dawndriving_customizer_settings');
