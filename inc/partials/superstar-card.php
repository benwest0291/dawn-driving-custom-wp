<div class="superstar__card">
    <a title="<?php echo the_title(); ?>" href="<?php echo the_permalink(); ?>">
        <img class="superstar__card__image" src="<?php echo the_post_thumbnail_url("post"); ?>">
        <div class="p-3">
            <h3 class="superstar__card__heading mb-2"><?php echo the_title(); ?></h3>
            <p class="superstar__card__content mt-1 mb-3"><?php echo wp_trim_words(get_the_content(), 7); ?></p>
                <div class="d-flex">
                    <a title="<?php echo the_title(); ?>" class="superstar__card__btn effect" href="<?php echo the_permalink(); ?>">Read more</a>
                </div>
        </div>
    </a>
</div>
