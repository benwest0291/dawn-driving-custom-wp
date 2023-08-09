<?php
get_header();
$error_message = get_theme_mod('error_settings');
?>
    <section class="error__banner">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-8">
                    <?php if($error_message == null){ ?>
                        <h1 class="error__banner__heading">Opps, Sorry 404</h1>
                    <?php } else { ?>
                        <h1 class="error__banner__heading"><?php echo $error_message; ?></h1>
                    <?php } ?>
                    <div class="d-flex mt-4">
                        <a href="<?php echo site_url('/'); ?>"><i class="banner__breadcrumb fa-solid fa-house mr-1"></i></a>
                        <?php
                        if (function_exists('yoast_breadcrumb')) {
                            yoast_breadcrumb('</p><p id=“breadcrumbs">', '</p><p>');
                        }
                        ?>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <!--Empty for background image -->
                </div>
            </div>
        </div>
    </section>
<?php include('inc/blocks/news-slider.php');
get_footer();
