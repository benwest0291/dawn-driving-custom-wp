<?php
get_header();

render_banner('news_banner');?>
    <section class="post">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <img class="post__image w-100 mt-4 mb-2 mb-md-3" src="<?php echo the_post_thumbnail_url("post"); ?>">
                    <div class="post__avatar d-flex mb-md-2 mb-1">
                        <?php echo get_avatar( get_the_author_meta( 'ID' ), 52 );  ?>
                        <p class="ml-2 m-md-2">Author: <strong><?php the_author(); ?></strong></p>
                        <p class="m-md-2">Posted: <strong><?php echo get_the_date(); ?></strong></p>
                    </div>
                    <?php echo the_content(); ?>

                    <div class="post__btns">
                        <h4 class="post__share__heading">Share on</h4>
                        <div class="d-flex justify-content-between mt-2 mb-5">
                            <a title="Share post on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink();?>" target="_blank"  class="btn__facebook">Facebook</a>
                            <a title="Share post on Facebook" href="https://www.instagram.com/sharer/sharer.php?u=<?php the_permalink();?>" target="_blank" class="btn__instagram">Instagram</a>
                            <a title="Share post on Twitter" href="https://twitter.com/intent/tweet?url=<?php the_permalink();?>" target="_blank" class="btn__twitter">Twitter</a>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-4 mb-4">
                    <h3 class="post__other__heading mt-md-4 mb-2">Other News</h3>
                    <?php
                    $current_post_id = get_the_ID(); // Get the ID of the current post

                    $args = array(
                        'post_type'      => 'post',
                        'posts_per_page' => 3,
                        'post__not_in'   => array($current_post_id), // Exclude the current post
                    );

                    $query = new WP_Query($args);

                    if ($query->have_posts()) {
                        while ($query->have_posts()) {
                            $query->the_post(); ?>
                            <div>
                                <?php get_template_part("inc/partials/small-card"); ?>
                            </div>
                            <?php
                        }
                        wp_reset_postdata();
                    }
                    ?>
                </div>
            </div>
        </div>
    </section>
<?php render_lower_banner('news_lower_banner');

include('inc/blocks/superstar-slider.php');

get_footer();