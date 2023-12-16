<?php
$test_centre = get_field('test_location');
$sevenoaks_link = 'https://www.google.com/maps/place/Sevenoaks+Driving+Test+Centre/...'; // Your links here
$maidstone_link = 'https://www.google.com/maps/place/Maidstone+DVSA+DTC/...'; // Your links here
$test_centre_link = $test_centre == 'Sevenoaks Test Centre' ? $sevenoaks_link : $maidstone_link;
?>

<div class="superstar__card position-relative">
    <a title="<?php echo get_the_title(); ?>" href="<?php echo get_the_permalink(); ?>">
        <img class="superstar__card__image" src="<?php echo get_the_post_thumbnail_url(null, 'post-thumbnail'); ?>" alt="<?php echo get_the_title(); ?>"/>

        <?php if ($test_centre != null) : ?>
            <a href="<?php echo esc_url($test_centre_link); ?>" target="_blank">
                <h6 class="superstar__card__test__centre effect position-absolute"><?php echo esc_html($test_centre); ?></h6>
            </a>
        <?php endif; ?>

        <div class="p-3">
            <h3 class="superstar__card__heading mb-2"><?php echo get_the_title(); ?></h3>
            <p class="superstar__card__content mt-1 mb-3"><?php echo wp_trim_words(get_the_content(), 7); ?></p>
            <div class="d-flex">
                <a title="<?php echo get_the_title(); ?>" aria-label="<?php echo get_the_title(); ?>" class="superstar__card__btn effect" href="<?php echo get_the_permalink(); ?>">Read more <span class="superstar__card__reader__text">Read more</span></a>
            </div>
        </div>
    </a>
</div>
