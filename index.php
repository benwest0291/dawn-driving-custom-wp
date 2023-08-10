<?php

get_header();
$post_id = false;

if( is_home() )
{
    $post_id = 37; // specif ID of blog pag
}

$heading = get_field('heading', $post_id );
$bg_image = get_field('background_image', $post_id );
$credential = get_field('credential', $post_id );
$background_lower_image = get_field('background_lower_image', $post_id );
$lower_heading = get_field('lower_heading', $post_id );
$button_text = get_field('button_text', $post_id );
$button_link = get_field('button_link', $post_id );
?>

<section class="banner" style="background-image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(<?php echo ($bg_image != null ? $bg_image['url'] : ''); ?>);" alt="<?php echo $bg_image['alt']; ?>">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8">
                <?php if($heading == null){ ?>
                    <h1 class="banner__heading"><?php the_title(); ?></h1>
                <?php } else { ?>
                    <h1 class="banner__heading"><?php echo $heading; ?></h1>
                <?php } ?>
                <div class="d-flex mt-4">
                    <a href="<?php echo site_url('/'); ?>"><i class="banner__breadcrumb fa-solid fa-house mr-1"></i></a>
                    <?php
                    if (function_exists('yoast_breadcrumb')) {
                        yoast_breadcrumb('</p><p id=“breadcrumbs">', '</p><p>');
                    }
                    ?>
                </div>
                <?php if($credential != null){ ?>
                    <img class="banner__credential mt-3" src="<?php echo $credential['url'];?>" alt="<?php echo $credential['alt']; ?>" />
                <?php } ?>
            </div>
            <div class="col-12 col-md-8">
                <!--Empty for background image -->
            </div>
        </div>
    </div>
</section>

<section class="mt-2">
    <div class="container">
            <div class="row">
                <?php if ( have_posts() ) { ?>
                    <?php while ( have_posts() ) {
                        the_post(); ?>
                        <div class="col-12 col-md-6 mb-4">
                            <?php get_template_part("inc/partials/news-card"); ?>
                        </div>
                    <?php }
                } else { ?>
                    <div class="mt-md-4 mb-4">
                        <h5 class="mb-4">Sorry, No news to load</h5>
                        <a title="Dawn driving homepage" class="btn__primary" href="<?php echo site_url("/") ?>">Return to homepage</a>
                    </div>
                    <?php
                };
                ?>
            </div>
        <?php
        echo paginate_links(); ?>
    </div>
</section>

<section class="lower__banner mt-3" style="background-image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(<?php echo ($background_lower_image != null ? $background_lower_image['url'] : ''); ?>);" alt="<?php echo $background_lower_image['alt']; ?>">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <?php if ($lower_heading != null) { ?>
                    <h2 class="lower__banner__heading mb-4"><?php echo $lower_heading ?></h2>
                <?php } ?>

                <?php if ($button_text != null && $button_link != null ) { ?>
                    <a title="<?php echo $button_text;?>" class="btn__primary" href="<?php echo $button_link;?>"><?php echo $button_text; ?></a>
                <?php } ?>
            </div>
            <div class="col-12 col-md-6">
                <!--Empty for bg-->
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
