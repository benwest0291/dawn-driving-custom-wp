<?php
/* Template Name: SuperStars */
get_header();

render_masthead("banner_superstars");
?>
<section class="super__stars__page pt-md-5">
    <div class="container">
        <div class="row">
            <?php
            $superstar = new WP_Query(array(
                "posts_per_page" => 35,
                "post_type" => "superstars",
                "orderby" => "meta_value_num",
                "order" => "DSC"
            ));
            while ($superstar->have_posts()) {
                $superstar->the_post();
                ?>
                <div class="col-12 col-md-6 col-lg-4">
                    <?php get_template_part("inc/partials/super-star-card"); ?>
                </div>
                <?php
            }
            wp_reset_postdata();
            ?>
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <button class="main__btn m-2">Load more SuperStars</button>
    </div>
</section>

<?php

render_lower_banner("lower_banner_superstars");

include("inc/blocks/news.php");

get_footer();
