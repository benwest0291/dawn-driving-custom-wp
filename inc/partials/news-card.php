<div class="news__card">
    <a title="<?php echo the_title(); ?>" href="<?php echo the_permalink(); ?>">
        <img class="news__card__image" src="<?php echo the_post_thumbnail_url("post"); ?>" alt="<?php echo the_title(); ?>"/>
        <div class="p-3">
            <div class="d-flex justify-content-between">
                <i class="fa-solid fa-clock news__card__clock"></i>
                <p class="news__card__date mb-1"><?php echo get_the_date(); ?></p>
            </div>
            <h3 class="news__card__heading"><?php echo the_title(); ?></h3>
            <div class="news__card__author__section d-flex n mt-1">
                <?php echo get_avatar( get_the_author_meta( 'ID' ), 52 );  ?>
                <p class="news__card__author mt-2 ml-2"><?php the_author(); ?></p>
            </div>
            <p class="news__card__content mt-1 mb-2"><?php echo wp_trim_words(get_the_content(), 18); ?></p>
            <div class="d-flex">
                <a title="<?php echo the_title(); ?>" class="news__card__btn effect" href="<?php echo the_permalink(); ?>">Read more</a>
            </div>
        </div>
    </a>
</div>

