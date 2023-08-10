<?php
get_header();
$test_centre = get_field('test_location');
$sevenoaks_link = 'https://www.google.com/maps/place/Sevenoaks+Driving+Test+Centre/@51.2715212,0.18564,17z/data=!3m1!4b1!4m6!3m5!1s0x47df4df85cac04f7:0x396c3aa431ae04eb!8m2!3d51.2715212!4d0.1882149!16s%2Fg%2F11dfj45j7h?entry=ttu';
$maidstone_link = 'https://www.google.com/maps/place/Maidstone+DVSA+DTC/@51.2716515,0.029151,11z/data=!3m1!5s0x47df3187ff042d67:0xe7e0379cc64d4a68!4m10!1m2!2m1!1smaidstone+driving+centre!3m6!1s0x47df31c070ec223d:0x3ac18fd288cbe8f8!8m2!3d51.2608319!4d0.5264462!15sChhtYWlkc3RvbmUgZHJpdmluZyBjZW50cmVaGiIYbWFpZHN0b25lIGRyaXZpbmcgY2VudHJlkgEOZHJpdmluZ19zY2hvb2yaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUkNka3hZTlRsM1JSQULgAQA!16s%2Fg%2F11fkr2t9r7?entry=ttu';
$test_centre_link = '';

render_banner('superstar_banner');?>
    <section class="post">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <img class="post__image w-100 mt-4 mb-2 mb-md-3" src="<?php echo the_post_thumbnail_url("post"); ?>">
                    <? if ($test_centre == 'Sevenoaks Test Centre'){
                        $test_centre_link = $sevenoaks_link;
                    } else {
                        $test_centre_link = $maidstone_link;
                    }
                    if ($test_centre != null ){ ?>
                        <h5 class="post__location mb-2">Test location: <a title="<?php echo $test_centre; ?>"href="<?php echo $test_centre_link; ?>" target="_blank"><span><?php echo $test_centre; ?></span></a></h5>
                    <?php } ?>
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
                    <h3 class="post__other__heading mt-md-4 mb-2">Recent SuperStars</h3>
                    <?php
                    $current_post_id = get_the_ID(); // Get the ID of the current post

                    $args = array(
                        'post_type'      => 'superstars',
                        'posts_per_page' => 5,
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
<?php render_lower_banner('superstar_lower_banner');

include('inc/blocks/news-slider.php');

get_footer();