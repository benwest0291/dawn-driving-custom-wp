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
     * 404 Page Settings
     */
    // Add Site Settings
    $wp_customize->add_section('four-oh-four', array(
        'title' => '404 Page Settings',
        'description' => '',
        'priority' => 48,
    ));
    // 404 Page Title
    $wp_customize->add_setting('four_oh_four_title');
    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'four_oh_four_title',
        array(
            'label' => 'Page Title',
            'section' => 'four-oh-four',
            'settings' => 'four_oh_four_title',
            'type' => 'text'
        )));
    // 404 Page Content
    $wp_customize->add_setting('four_oh_four_content');
    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'four_oh_four_content',
        array(
            'label' => 'Page Content',
            'section' => 'four-oh-four',
            'settings' => 'four_oh_four_content',
            'type' => 'textarea'
        )));

    function themeslug_sanitize_dropdown_pages( $page_id, $setting ) {
        $page_id = absint( $page_id );
        return ( 'publish' == get_post_status( $page_id ) ? $page_id : $setting->default );
    }
}

add_action('customize_register', 'bw_customizer_settings');