<?php
$test_centre = get_field('test_location');
$sevenoaks_link = 'https://www.google.com/maps/place/Sevenoaks+Driving+Test+Centre/@51.2715212,0.18564,17z/data=!3m1!4b1!4m6!3m5!1s0x47df4df85cac04f7:0x396c3aa431ae04eb!8m2!3d51.2715212!4d0.1882149!16s%2Fg%2F11dfj45j7h?entry=ttu';
$maidstone_link = 'https://www.google.com/maps/place/Maidstone+DVSA+DTC/@51.2716515,0.029151,11z/data=!3m1!5s0x47df3187ff042d67:0xe7e0379cc64d4a68!4m10!1m2!2m1!1smaidstone+driving+centre!3m6!1s0x47df31c070ec223d:0x3ac18fd288cbe8f8!8m2!3d51.2608319!4d0.5264462!15sChhtYWlkc3RvbmUgZHJpdmluZyBjZW50cmVaGiIYbWFpZHN0b25lIGRyaXZpbmcgY2VudHJlkgEOZHJpdmluZ19zY2hvb2yaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUkNka3hZTlRsM1JSQULgAQA!16s%2Fg%2F11fkr2t9r7?entry=ttu';
$test_centre_link = '';
?>
<div class="superstar__card position-relative">
    <a title="<?php echo the_title(); ?>" href="<?php echo the_permalink(); ?>">
        <img class="superstar__card__image " src="<?php echo the_post_thumbnail_url("post"); ?>" alt="<?php echo the_title(); ?>"/>

        <? if ($test_centre == 'Sevenoaks Test Centre'){
            $test_centre_link = $sevenoaks_link;
        } else {
            $test_centre_link = $maidstone_link;
        }

        if ($test_centre != null) { ?>
            <a href="<?php echo $test_centre_link; ?>" target="_blank"><h6 class="superstar__card__test__centre effect position-absolute"><?php echo $test_centre; ?></h6></a>
         <?php } ?>
        <div class="p-3">
            <h3 class="superstar__card__heading mb-2"><?php echo the_title(); ?></h3>
            <p class="superstar__card__content mt-1 mb-3"><?php echo wp_trim_words(get_the_content(), 7); ?></p>
                <div class="d-flex">
                    <a title="<?php echo the_title(); ?>" class="superstar__card__btn effect" href="<?php echo the_permalink(); ?>">Read more</a>
                </div>
        </div>
    </a>
</div>


