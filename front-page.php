<?php
get_header();

render_masthead("masthead_home");

$heading = get_field("about_heading");
$content = get_field("about_content");
$aboutImage = get_field("about_image");
$aboutButtonText = get_field("about_button_text");
$aboutButtonUrl = get_field("about_button_url");
?>

<section class="about">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8">
                <?php if ($heading != null){ ?>
                    <?php echo $heading; ?>
                <?php } ?>

                <?php if ($content != null){ ?>
                    <p><?php echo $content; ?></p>
                <?php } ?>

                <?php if ($aboutButtonText != null){ ?>
                    <button href="<?php echo $aboutButtonUrl; ?>" class="main__btn w-auto mt-2"><?php echo $aboutButtonText; ?><img class="ml-1" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/cevron.png" /></button>
                <?php } ?>
            </div>

            <div class="col-12 col-md-4">
                <?php if ($aboutImage != null){ ?>
                    <img class="about__image mt-2" src="<?php echo $aboutImage['url']; ?>">
                <?php } ?>
            </div>
        </div>
    </div>
</section>

<?php include("inc/blocks/super-stars.php"); ?>

<?php
get_footer();
