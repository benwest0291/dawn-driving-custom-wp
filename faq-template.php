<?php
/* Template Name: FAQ */
get_header();

render_banner('faq_banner');
$subheading = get_field('subheading');
$heading = get_field('heading');
$paragraph = get_field('paragraph');
?>

<section class="faq">
    <div class="container">
        <div class="faq__top mt-4 mb-2">
            <?php if ($subheading != null){ ?>
                <h6 class="faq__subheading"><?php echo $subheading; ?></h6>
            <?php } ?>

            <?php if ($heading != null){ ?>
                <h1 class="faq__heading mb-3"><?php echo $heading; ?></h1>
            <?php } ?>

            <?php if ($heading != null){ ?>
                <p class="faq__paragraph"><?php echo $paragraph; ?></p>
            <?php } ?>
        </div>
    </div>
</section>

<?php include("inc/blocks/accordion.php");

render_lower_banner('lower_banner_faq');

include('inc/blocks/superstar-slider.php');

get_footer();