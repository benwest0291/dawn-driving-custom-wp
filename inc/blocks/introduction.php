<?php
$small_heading = get_field('small_heading');
$main_heading = get_field('main_heading');
$content = get_field('content');
$form = get_field('booking_form');

if ($form != null) {
$formShortcode = '[contact-form-7 id="' . $form->ID . '"]';
}
?>
<section class="introduction mb-4">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <?php if ($small_heading != null){ ?>
                    <h6 class="introduction__subheading mt-4 mb-2"><?php echo $small_heading; ?></h6>
                <?php } ?>

                <?php if ($main_heading != null){ ?>
                    <h2 class="introduction__heading mb-3"><?php  echo $main_heading; ?></h2>
                <?php } ?>

                <?php if ($content != null){ ?>
                <div class="mb-3">
                    <?php echo $content ;?>
                </div>
                <?php } ?>
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