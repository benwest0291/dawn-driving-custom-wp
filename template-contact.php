<?php
/* Template Name: Contact */
get_header();

$subheading = get_field('subheading');
$heading = get_field('heading');
$content = get_field('content');
$location = get_field("map_location");
$form = get_field('contact_form');
$email = get_theme_mod('contact_email');
$phone = get_theme_mod('contact_telephone');
$facebook = get_theme_mod('facebook_url');
$instagram = get_theme_mod('instagram_url');
$twitter = get_theme_mod('twitter_url');

if ($form != null) {
    $formShortcode = '[contact-form-7 id="' . $form->ID . '"]';
}
render_banner('contact_banner');
?>

<section class="contact">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <?php if ($subheading != null){ ?>
                    <h6 class="contact__subheading mt-4 mb-2"><?php echo $subheading; ?></h6>
                <?php } ?>

                <?php if ($heading != null){ ?>
                    <h2 class="contact__heading mb-3"><?php  echo $heading; ?></h2>
                <?php } ?>

                <?php if ($content != null){ ?>
                    <p class="mb-5"><?php echo $content ;?></p>
                <?php } ?>

                <?php if ($phone != null) { ?>
                    <div class="mb-2">
                        <a title="Dawn driving phone number" href="tel:<?php echo $phone; ?>" class="contact__number"><i class="contact__icon fa-solid fa-phone mr-1"></i><?php echo $phone; ?></a>
                    </div>
                <?php } ?>

                <?php if ($email != null) { ?>
                    <div>
                        <a title="Dawn driving phone number" href="mailto:<?php echo $email; ?>" class="contact__email"><i class="contact__icon fa-solid fa-envelope mr-1"></i><?php echo $email; ?></a>
                    </div>
                <?php } ?>

                <h3 class="contact__heading mt-4 mb-3">Socials</h3>
                <div class="d-flex mt-2 mt-md-2 mb-md-4">
                    <?php if ($facebook != null) { ?>
                        <a title="Facebook" href="<?php echo $facebook; ?>" target="_blank"><i class="fa-brands fa-facebook contact__icon mr-1"></i></a>
                    <?php } ?>

                    <?php if ($instagram != null) { ?>
                        <a title="Instagram" href="<?php echo $instagram; ?>" target="_blank"><i class="fa-brands fa-instagram contact__icon mr-1"></i></a>
                    <?php } ?>

                    <?php if ($twitter != null) { ?>
                        <a title="Twitter" href="<?php echo $twitter; ?>" target="_blank"><i class="fa-brands fa-x-twitter contact__icon"></i></a>
                    <?php } ?>
                </div>
            </div>

            <div class="col-12 col-lg-6">
                <?php
                if ($formShortcode != null) {
                    echo do_shortcode($formShortcode);
                }
                ?>
            </div>
        </div>
    </div>
</section>

<?php
if ($location) { ?>
    <div class="acf-map" data-zoom="16">
        <div class="marker" data-lat="<?php echo esc_attr($location['lat']); ?>" data-lng="<?php echo esc_attr($location['lng']); ?>"></div>
    </div>
<?php }

include('inc/blocks/news-slider.php');?>

<?php
get_footer();

