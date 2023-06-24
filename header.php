<!DOCTYPE html>
<html lang=<?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo("charset"); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <title><?php bloginfo(the_title()); ?>"</title>
</head>

<?php
$logo = get_theme_mod('company_logo');
$telephone = get_theme_mod('contact_telephone');
$facebook = get_theme_mod('facebook');
$instagram = get_theme_mod('instagram');
?>

<body <?php body_class(); ?>>
    <header class="site__header">
        <section class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 pt-1">
                        <div class="d-flex justify-content-start">
                        <h6 class="color-grey">Driving Instructor - <span class="color-red">Maidstone and Sevenoaks</span></h6>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 pt-1">
                        <div class="d-flex justify-content-end">
                            <h6 class="color-grey d-none d-md-block">Contact Dawn on
                                <span class="color-red">
                                    <?php if ($telephone != null){
                                    echo $telephone; }
                                    ?>
                                </span>
                                <?php if ($facebook != null){ ?>
                                    <a href="<?php echo $facebook; ?>"><i class="fa-brands fa-facebook ml-1 header__top__facebook"></i></a>
                                <?php } ?>

                                <?php if ($instagram != null){ ?>
                                    <a href="<?php echo $instagram; ?>"><i class="fa-brands fa-instagram header__top__instagram"></i></a>
                                <?php } ?>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <nav class="nav">
            <div class="container">
                <div class="navigation__burger">
                    <div class="line__one"></div>
                    <div class="line__two"></div>
                    <div class="line__three"></div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <?php if ($logo != null){ ?>
                            <a href="<?php echo site_url("/") ?>"><img class="nav__logo" src="<?php echo $logo; ?>"></a>
                        <?php } ?>
                    </div>

                    <div class="col-12 col-md-6 ">
                        <div class="p-0 navigation__dropdown js-navigation__layer">
                            <ul class="navigation__list">
                                <?php
                                wp_nav_menu(array(
                                    "theme_location" => "headerMenu",
                                    "menu__class" => "nav__links"
                                ));
                                ?>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    </header>
<main id="main">
<?php include('inc/partials/social-side.php'); ?>