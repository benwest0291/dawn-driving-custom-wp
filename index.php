<?php
get_header();
render_masthead("news_banner");
?>

    <section class="news__page pt-md-5">
        <div class="container">
            <div class="row">
                <?php
                $news = new WP_Query(array(
                    "posts_per_page" => 35,
                    "post_type" => "post",
                    "orderby" => "meta_value_num",
                    "order" => "ASC"
                ));
                while ($news->have_posts()) {
                    $news->the_post();
                    ?>
                    <div class="col-12 col-md-6 col-lg-4">
                        <?php get_template_part("inc/partials/news-card"); ?>
                    </div>
                    <?php
                }
                wp_reset_postdata();
                ?>
            </div>
        </div>
    </section>

<?php

render_lower_banner("lower_banner_news");

include("inc/blocks/super-stars.php");

get_footer();