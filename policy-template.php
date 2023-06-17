<?php
/* Template Name: Policy */
get_header();
$subHeader = get_field("banner_sub_header");
$mainHeader = get_field("banner_main_header");
$contentHeader = get_field("content_header")

?>

<section class="policy__banner">
    <div class="container">
        <?php if($subHeader != null) { ?>
             <h6 class="policy__banner__subheading color-red text-center"><?php echo $subHeader; ?></h6>
        <?php } ?>

        <?php if($mainHeader != null) { ?>
            <h2 class="policy__banner__heading mt-1 text-center mb-5"><?php echo $mainHeader; ?></h2>
        <?php } ?>
    </div>
</section>

<section class="policy__main__content">
    <div class="container">
        <h2 class="mb-3 pt-4"><?php echo $contentHeader; ?></h2>
        <?php the_content(); ?>
    </div>
</section>
<?php

get_footer();
