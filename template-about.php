<?php
/* Template Name: About */

$heading = get_field('heading');
$subheading = get_field('subheading');
$content = get_field('content');
$image = get_field('image');
$button_one_text = get_field('button_text_one');
$button_one_url = get_field('button_one_url');
$button_two_text = get_field('button_text_two');
$button_two_url = get_field('button_two_url');

get_header();

render_banner('about_banner');?>

<section class="about">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <h6 class="about__subheading mt-4 mb-2"><?php echo $subheading; ?></h6>
                <?php if($heading == null){ ?>
                    <h2 class="about__heading mb-3"><?php the_title(); ?></h2>
                <?php } else { ?>
                    <h2 class="about__heading mb-3"><?php echo $heading; ?></h2>
                <?php } ?>

                <?php if($content != null) { ?>
                    <div>
                        <?php echo $content; ?>
                    </div>
                <?php } ?>
                <div class="mt-4 mb-2">
                    <?php if ($button_one_text != null && $button_one_url != null){ ?>
                        <a title="<?php echo $button_one_text;?>" class="btn__primary" href="<?php echo $button_one_url;?>"><?php echo $button_one_text;?></a>
                    <?php } ?>

                    <?php if ($button_two_text != null && $button_two_url != null){ ?>
                        <a title="<?php echo $button_one_text;?>" class="btn__secondary" href="<?php echo $button_two_url;?>"><?php echo $button_two_text;?></a>
                    <?php } ?>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <img class="about__image w-100" src="<?php echo $image['url'];?>" alt="<?php echo $image['alt']; ?>"/>
            </div>
        </div>
    </div>
</section>

<?php render_lower_banner('lower_banner_about');

include('inc/blocks/news-slider.php');

get_footer();
