<?php
/* Template Name: Superstars */
get_header();
render_banner('banner_superstars');?>

<section class="superstars">
    <div class="container">
        <div class="row">
            <?php
            $superstars = new WP_Query(array(
                "posts_per_page" => 12,
                "post_type" => "superstars",
                "orderby" => "meta_value_num",
                "order" => "ASC",
            ));

            while ($superstars->have_posts()) {
                $superstars->the_post(); ?>
                <div class="col-12 col-lg-4">
                    <?php get_template_part("inc/partials/superstar-card"); ?>
                </div>
                <?php
            }
            wp_reset_postdata();
            ?>
        </div>
    </div>
</section>

<?php render_lower_banner('lower_banner_superstars'); ?>





<?php get_footer();