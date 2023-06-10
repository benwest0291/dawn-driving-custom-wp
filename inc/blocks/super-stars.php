<section class="super__stars">
    <div class="container">
        <div class="d-flex justify-content-between">
            <h2>My <span class="color-red">SuperStars</span></h2>
            <a href="/superstars" class="main__btn w-auto">View More<img class="ml-1" src="<?php echo get_template_directory_uri(); ?>/assets/images/icons/cevron.png" /></a>
        </div>
            <div class="mt-5">
                <div class="row">
                    <?php
                    $superstar = new WP_Query(array(
                            "posts_per_page" => 3,
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
            </div>
        </div>
    </div>
</section>
