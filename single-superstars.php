<?php
get_header();
$testCentre = get_field("test_centre");
$mainImage = get_field("main_image");

render_masthead("main_banner_superstars");

?>

    <section class="single__superstar">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-8">
                    <article class="mt-5 pb-5">
                        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                            <h2> <?php the_title(); ?></h2>
                            <p class="color-black">Test centre: <span class="color-red"><strong><?php echo $testCentre; ?></strong></span> </p>
                            <p><?php the_content(); ?></p>
                            <img class="super__stars__main__image" src="<?php echo the_post_thumbnail_url("post"); ?>">

                            <div class="super__stars__social__share">
                                <button class="facebook__share mb-1">Share on Facebook <i class="fa-brands fa-facebook"></i></button>
                                <button class="instagram__share">Share on Instagram <i class="fa-brands fa-instagram "></i></button>
                            </div>
                        </div>
                    </article>

                    <div class="col-12 col-md-4">
                       <h2 class="mt-5 mb-3" >Recent <span class="color-red">Passes</span></h2>
                        <?php

                        $superstar = new WP_Query(array(
                                "posts_per_page" => 5,
                                "post_type" => "superstars",
                                "orderby" => "meta_value_num",
                                "order" => "DSC"
                            ));
                            while ($superstar->have_posts()) {
                                $superstar->the_post();
                                ?>
                                <a href="<?php the_permalink(); ?>">
                                    <div class="d-flex mb-2 super__stars__recent">
                                        <img src=" <?php echo the_post_thumbnail_url("post"); ?>">
                                        <div>
                                             <p class="mt-1 ml-1"><?php the_title(); ?></p>
                                             <p class="mt-1 ml-1 color-red"><?php echo $testCentre; ?></p>
                                         </div>
                                    </div>
                                 </a>
                                <?php
                            }
                            wp_reset_postdata();
                            ?>
                    </div>
                 </div>
             </div>
        </section>
        <?php endwhile;
    endif; ?>

<?php

render_lower_banner("lower_banner_single_superstar");

include("inc/blocks/news.php");

get_footer();