<?php
$testCentre = get_field("test_centre");
?>

<div class="super__star__card">
    <img class="super__star__card__image" src=" <?php echo the_post_thumbnail_url("post"); ?>">
        <div class="super__star__card__centre">
            <h6 class="mt-1"><?php echo $testCentre; ?></h6>
        </div>

        <div class="d-flex justify-content-around p-2">
            <h4 class="mt-1"><?php the_title(); ?></h4>
            <a href="<?php echo the_permalink(); ?>"><i class="fa-solid fa-circle-chevron-right super__star__card__link"></i></a>
        </div>
</div>



