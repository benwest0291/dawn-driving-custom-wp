<?php
$superstars_subheading = get_field('superstars_sub_heading', 'option');
$superstars_heading = get_field('superstars_heading', 'option');
$superstars_button_text = get_field('superstars_button_text', 'option');
$superstars_button_url = get_field('superstars_button_url', 'option');
?>

<section class="superstar__slider">
    <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <?php if ($superstars_subheading != null){ ?>
                        <h6 class="superstar__slider__subheading mt-4 mb-2"><?php echo $superstars_subheading; ?></h6>
                    <?php } ?>

                    <?php if($superstars_heading  != null) { ?>
                        <h2 class="superstar__slider__heading mb-md-3"><?php echo $superstars_heading; ?></h2>
                    <?php } ?>
                </div>
                <div class="col-12 col-md-6 mt-md-5">
                    <div class="d-flex justify-content-md-end justify-content-start mt-2 mb-2">
                        <?php if($superstars_button_url != null &&  $superstars_button_text != null) { ?>
                            <a title="<?php echo $superstars_button_text; ?>"  class="superstar__slider__btn" href="<?php echo $superstars_button_url; ?>"><?php echo $superstars_button_text; ?></a>
                        <?php } ?>
                    </div>
                </div>
            </div>
        <div class="superstar__slider__wrapper">
            <div class="slider">
                <?php
                $superstars = new WP_Query(array(
                    "posts_per_page" => 10,
                    "post_type" => "superstars",
                    "orderby" => "meta_value_num",
                    "order" => "ASC"
                ));
                while ($superstars->have_posts()) {
                    $superstars->the_post(); ?>
                    <div>
                        <?php get_template_part("inc/partials/superstar-card"); ?>
                    </div>
                    <?php
                }
                wp_reset_postdata();
                ?>
            </div>
        </div>
    </div>
</section>
