<?php
$logo = get_theme_mod('company_logo');
$footer_text = get_theme_mod('footer_text');
$facebook = get_theme_mod('facebook_url');
$instagram = get_theme_mod('instagram_url');
$twitter = get_theme_mod('twitter_url');
$email = get_theme_mod('contact_email');
$phone = get_theme_mod('contact_telephone');
?>

<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6 col-xl-3">
                <?php if ($logo != null) { ?>
                    <a title="Dawn driving homepage" href="<?php echo site_url("/") ?>"><img class="footer__logo mt-1 mt-md-2" src="<?php echo $logo; ?>" alt="<?php echo get_bloginfo("name"); ?>"></a>
                <?php } ?>

                <?php if ($footer_text != null) { ?>
                    <p class="footer__infomation mt-3 pr-5 mr-md-0"><?php echo $footer_text ?></p>
                <?php } ?>

                <a href="<?php echo site_url('/terms-conditions');?>">Terms & Conditions</a>

                <div class="d-flex mt-2 mt-md-4 mb-md-4">
                    <?php if ($facebook != null) { ?>
                        <a title="Facebook" href="<?php echo $facebook; ?>" target="_blank"><i class="fa-brands fa-facebook footer__social mr-1"></i></a>
                    <?php } ?>

                    <?php if ($instagram != null) { ?>
                        <a title="Instagram" href="<?php echo $instagram; ?>" target="_blank"><i class="fa-brands fa-instagram footer__social mr-1"></i></a>
                    <?php } ?>

                    <?php if ($twitter != null) { ?>
                        <a title="Twitter" href="<?php echo $twitter; ?>" target="_blank"><i class="fa-brands fa-x-twitter footer__social"></i></a>
                    <?php } ?>
                </div>
            </div>

            <div class="col-12 col-lg-6 col-xl-3">
                <h4 class="footer__heading">CONTACT</h4>
                <div class="d-flex mt-md-3 mr-2">
                    <?php if ($phone != null) { ?>
                        <i class="fa-solid fa-phone mr-1 footer__icons"></i>
                        <a title="Dawn driving phone number" class="footer__contact" href="tel:<?php echo $phone; ?>"><?php echo $phone; ?></a>
                    <?php } ?>
                </div>
                <div class="d-flex">
                    <?php if ($email != null) { ?>
                        <i class="fa-solid fa-envelope mr-1 footer__icons"></i>
                        <a title="Dawn driving email" class="footer__contact" href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a>
                    <?php } ?>
                </div>
            </div>

            <div class="col-12 col-lg-6 col-xl-3">
                <h4 class="footer__heading">SUPERSTARS</h4>
                <ul class="list-unstyled mt-4">
                    <?php
                    $superstars = new WP_Query(array(
                        "posts_per_page" => 5,
                        "post_type" => "superstars",
                        "orderby" => "meta_value_num",
                        "order" => "ASC"
                    ));
                    while ($superstars->have_posts()) {
                        $superstars->the_post();
                        ?>
                        <li class="mb-2">
                            <a title="<?php the_title();?>" class="footer__link" href="<?php echo the_permalink(); ?>"><?php the_title(); ?></a>
                        </li>
                        <?php
                    }
                    wp_reset_postdata();
                    ?>
                </ul>
            </div>

            <div class="col-12 col-lg-6 col-xl-3">
                <h4 class="footer__heading">NEWS</h4>
                <ul class="list-unstyled mt-4">
                    <?php
                    $news = new WP_Query(array(
                        "posts_per_page" => 5,
                        "post_type" => "post",
                        "orderby" => "meta_value_num",
                        "order" => "ASC"
                    ));
                    while ($news->have_posts()) {
                        $news->the_post();
                        ?>
                        <li class="mb-2">
                            <a title="<?php the_title();?>" class="footer__link" href="<?php echo the_permalink(); ?>"><?php the_title(); ?></a>
                        </li>
                        <?php
                    }
                    wp_reset_postdata();
                    ?>
                </ul>
            </div>
        </div>

        <hr class="footer__hr">
        <div class="row footer__base">
            <div class="col-12 col-md-6">
                <p class="text-center">Copyright <?php echo date("Y"); ?> Dawn Driving Tuition. All Rights Reserved</p>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex justify-content-center">
                    <p>Website by </p>
                    <a title="Ben West Development" href="https://benwest.dev" target="_blank"><img class="ml-1 mb-2" src="<?php echo get_template_directory_uri(); ?>/assets/images/bw-logo.svg" alt="BW.dev logo"  /></a>
                </div>
            </div>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>

</html>
