<?php
$bannerbg = $data["banner_bg"];
$heading = $data["banner_text"];
$bannerBtnText = $data["banner_button_text"];
$bannerBtnUrl = $data["banner_button_url"];
?>

<section class="lower__banner" style="background-image: url(<?php echo ($bannerbg != null ? $bannerbg['url'] : ''); ?>);">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 mt-5">

                <?php if ($heading != null){ ?>
                    <?php echo $heading; ?>
                <?php } ?>

                <?php if ( $bannerBtnText != null){ ?>
                    <button href="<?php echo $bannerBtnUrl; ?>" class="main__btn mt-2 w-auto">
                        <?php echo $bannerBtnText; ?>
                        <img class="ml-1" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/cevron.png" />
                    </button>
                <?php } ?>

            </div>
            <div class="col-12 col-md-6">
                <!-- Empty for BG -->
            </div>
        </div>
    </div>
</section>
