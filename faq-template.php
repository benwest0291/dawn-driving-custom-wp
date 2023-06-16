<?php
/* Template Name: FAQ */
get_header();

render_masthead("faq_banner");


?>

<section class="faq mt-5 mb-5">
    <div class="container">
        <div class="faq__bar"><?php
                if (have_rows("faqs")) :
                    while (have_rows("faqs")) : the_row();
                         $question = get_sub_field("question");
                         $answer = get_sub_field("answer");
                     ?>
                    <?php if ($question != null) { ?>
                        <h3><?php echo $question; ?></h3>
                    <?php } ?>

                        <?php if ($answer != null) { ?>
                            <p><?php echo $answer; ?></p>
                        <?php } ?>
                    <?php
                endwhile;
            endif; ?>
        </div>
    </div>
</section>

<?php

render_lower_banner("faq_lower_banner");

include("inc/blocks/super-stars.php");

get_footer();
