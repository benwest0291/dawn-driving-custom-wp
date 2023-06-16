<?php
/* Template Name: FAQ */
get_header();

render_masthead("faq_banner");
$intro = get_field("faq_intro");
$faqHeading = get_field("faq_heading");
?>

<section class="faq mt-5 mb-5">
    <div class="container">
        <?php if ($faqHeading != null) { ?>
            <h2 class="mb-2"><?php echo $faqHeading; ?></h2>
        <?php } ?>

        <?php if ($intro != null) { ?>
            <div class="mb-4"><?php echo $intro; ?></div>
        <?php } ?>

    <?php
        if (have_rows("faqs")) :
        while (have_rows("faqs")) : the_row();
        $question = get_sub_field("question");
        $answer = get_sub_field("answer");
    ?>
        <div class="faq__bar js-faq-bar" >
            <div class="d-flex justify-content-between">
                <?php if ($question != null) { ?>
                    <p class="faq__question"><?php echo $question; ?></p>
                <?php } ?>
                <img class="faq__chevron js-faq__chevron" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/red-chevron.png" />
            </div>

            <?php if ($answer != null) { ?>
                <p class="mt-2 faq__answer js-faq__answer"><?php echo $answer; ?></p>
            <?php } ?>
        </div>
        <?php
        endwhile; endif; ?>
    </div>
</section>

<?php

render_lower_banner("faq_lower_banner");

include("inc/blocks/super-stars.php");

get_footer();
