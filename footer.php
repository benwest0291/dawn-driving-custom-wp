<?php
// Customizer Varibles
$logo = get_theme_mod('company_logo');
$email = get_theme_mod('contact_email');
$telephone = get_theme_mod('contact_telephone');
?>

<footer class="footer">
    <div class="footer__main">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <?php if ($logo != null) { ?>
                        <img class="footer__logo" src="<?php echo $logo; ?>" alt="<?php echo get_bloginfo("name"); ?>"></img>
                    <?php } ?>
                    <div class="d-flex mt-1">
                        <?php if ($telephone != null) { ?>
                            <i class="footer__phone fa-solid fa-square-phone"></i>
                            <p class="ml-1"><?php echo $telephone; ?></p>
                        <?php } ?>
                    </div>
                    <div class="d-flex">
                        <?php if ($email != null) { ?>
                            <i class="footer__email fa-solid fa-square-envelope"></i>
                            <p class="ml-1"><?php echo $email; ?></p>
                        <?php } ?>
                    </div>
                    <p><a class="color-white" href="">Terms and Conditions</a></p>
                    <img class="footer__credential" src="<?php echo get_template_directory_uri(); ?>/assets/images/DVSA.png" />
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-1">
                    <h3 class="footer__heading color-white">Latest <span class="color-red">News</span></h3>
                    <ul>
                        <?php
                        wp_nav_menu(array(
                            "theme_location" => "footerMenuNews"
                        ));
                        ?>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-1">
                    <h3 class="footer__heading color-white">Super<span class="color-red">Stars</span></h3>
                    <ul>
                        <?php
                        wp_nav_menu(array(
                            "theme_location" => "footerMenuSuperStars"
                        ));
                        ?>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-1">
                    <h3 class="footer__heading color-white">Navigation <span class="color-red">Links</span> </h3>
                    <ul>
                        <?php
                        wp_nav_menu(array(
                            "theme_location" => "footerNav"
                        ));
                        ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

<div class="footer__base">
    <div class="container">
        <div class="row pt-1">
            <div class="col-12 col-md-6">
                <p class="text-center color-black mt-1">Dawn Driving Tuition © <?php echo date("Y"); ?></p>
            </div>
            <div class="col-12 col-md-6">
                <p class="text-center color-black">Website by <a href="https://benwest.dev" target="_blank"><img class="dev-by" src="<?php echo get_template_directory_uri(); ?>/assets/images/pixel-genie.png" /></a></p></p>
            </div>
        </div>
    </div>
</div>

<?php wp_footer(); ?>
</body>

</html>
