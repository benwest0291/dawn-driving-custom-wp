<div class="small__card mt-2">
    <a title="<?php echo the_title(); ?>" href="<?php echo the_permalink(); ?>">
        <div class="d-flex">
            <img class="small__card__image" src="<?php echo the_post_thumbnail_url("post"); ?>" alt="<?php echo the_title(); ?>"/>
            <div class="p-2">
                <h4 class="small__card__heading"><?php echo the_title(); ?></h4>
                <a title="<?php echo the_title(); ?>" class="small__card__link effect" href="<?php echo the_permalink(); ?>">Read more</a>
            </div>
        </div>
    </a>
</div>