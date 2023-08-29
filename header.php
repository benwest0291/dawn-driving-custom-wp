<?php
// Menus
$menuLocations = get_nav_menu_locations();
$logo = get_theme_mod('company_logo');
$email = get_theme_mod('contact_email');
$phone = get_theme_mod('contact_telephone');
$facebook = get_theme_mod('facebook_url');
$instagram = get_theme_mod('instagram_url');
$twitter = get_theme_mod('twitter_url');

if (isset($menuLocations['header'])) {
    $header_links = wp_get_nav_menu_items($menuLocations['header']);
} else {
    $header_links = null;
}
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>"/>
    <?php wp_head(); ?>
    <title><?php wp_title(); ?></title>
    <meta name="theme-color" content="#000000">
</head>

<body <?php body_class(); ?>>

<header class="header">
    <div class="header__top">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="d-flex justify-content-between justify-content-md-start">
                        <div class="d-flex mr-2">
                            <?php if ($phone != null) { ?>
                                <i class="fa-solid fa-phone mr-1 header__icons"></i>
                                <a title="Dawn driving phone number" href="tel:<?php echo $phone; ?>" class="header__contact"><?php echo $phone; ?></a>
                            <?php } ?>
                        </div>
                        <div class="d-flex">
                            <?php if ($email != null) { ?>
                                <i class="fa-solid fa-envelope mr-1 header__icons"></i>
                                <a title="Dawn driving phone number" href="mailto:<?php echo $email; ?>" class="header__contact"><?php echo $email; ?></a>
                            <?php } ?>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 d-none d-lg-block">
                    <div class="d-flex justify-content-end mr-2">
                        <?php if ($facebook != null) { ?>
                            <a title="Facebook" href="<?php echo $facebook; ?>" target="_blank"><i class="fa-brands fa-facebook header__icons"></i></a>
                        <?php } ?>

                        <?php if ($instagram != null) { ?>
                            <a title="Instagram" href="<?php echo $instagram; ?>" target="_blank"><i class="fa-brands fa-instagram header__icons"></i></a>
                        <?php } ?>

                        <?php if ($twitter != null) { ?>
                            <a title="Twitter" href="<?php echo $twitter; ?>" target="_blank"><i class="fa-brands fa-x-twitter header__icons"></i></a>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="navigation__burger">
            <div class="line__one"></div>
            <div class="line__two"></div>
            <div class="line__three"></div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <?php if ($logo != null) { ?>
                    <a title="Dawn driving homepage" href="<?php echo site_url("/") ?>"><img class="header__logo mt-1 mt-md-2" src="<?php echo $logo; ?>" alt="<?php echo get_bloginfo("name"); ?>"></a>
                <?php } ?>
            </div>
            <?php if (!empty($header_links)) { ?>
                <nav class="header__links__container col-12 col-md-6">
                    <ul class="header__links list-unstyled">
                        <?php foreach ($header_links as $item) { ?>
                            <li class="header__link mt-1 ml-1 mb-1">
                                <a title="<?php echo $item->title; ?>" class="text-decoration-none" href="<?php echo $item->url; ?>"><?php echo $item->title; ?></a>
                            </li>
                        <?php } ?>
                    </ul>
                    <div class="header__contact d-flex justify-content-center mt-3 d-md-none d-block">
                        <div class="w-50">
                            <div class="d-flex justify-content-between mt-2 ">
                                <?php if($facebook != null){ ?>
                                    <a title="facebook" href="<?php echo $facebook;?>" target="_blank"><i class="fa-brands fa-facebook social__icon"></i></a>
                                <?php } ?>

                                <?php if($instagram != null){ ?>
                                    <a title="Instagram"  href="<?php echo $instagram;?>" target="_blank"><i class="fa-brands fa-instagram social__icon"></i></a>
                                <?php } ?>

                                <?php if($twitter != null){ ?>
                                    <a title="Twitter"  href="<?php echo $twitter;?>" target="_blank"><i class="fa-brands fa-x-twitter social__icon"></i></a>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                </nav>
                <?php
            } ?>
        </div>
    </div>
</header>