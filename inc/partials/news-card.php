<div class="news__card">
    <img class="news__card__image" src=" <?php echo the_post_thumbnail_url("post"); ?>">
    <div class="news__card__info d-flex justify-content-between">
        <?php echo get_avatar( get_the_author_meta( 'ID' ), 52 );  ?>
        <div class="d-flex news__card__info__inner">
            <i class="fa-solid fa-clock color-white news__card__clock"></i>
            <p class="color-white mt-1 mr-1"><?php echo get_the_date(); ?></p>
        </div>
    </div>
    <div class="d-flex justify-content-around p-2">
        <h4 class="mt-1"><?php the_title(); ?></h4>
        <a href="<?php echo the_permalink(); ?>"><i class="fa-solid fa-circle-chevron-right news__card__link"></i></a>
    </div>
</div>



