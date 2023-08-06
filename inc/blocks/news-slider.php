<?php
$news_subheading = get_field('news_sub_heading', 'option');
$news_heading = get_field('news_heading', 'option');
$news_button_text = get_field('news_button_text', 'option');
$news_button_url = get_field('news_button_url', 'option');
?>

<section class="news__slider">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <?php if ($news_subheading != null){ ?>
                    <h6 class="news__slider__subheading mt-4 mb-2"><?php echo $news_subheading; ?></h6>
                <?php } ?>

                <?php if($news_heading  != null) { ?>
                    <h2 class="news__slider__heading mb-md-3"><?php echo $news_heading; ?></h2>
                <?php } ?>
            </div>
            <div class="col-12 col-md-6 mt-md-5">
                <div class="d-flex justify-content-md-end justify-content-start mt-2 mb-2">
                    <?php if($news_button_url != null &&  $news_button_text != null) { ?>
                        <a title="<?php echo $news_button_text; ?>"  class="news__slider__btn" href="<?php echo $news_button_url; ?>"><?php echo $news_button_text; ?></a>
                    <?php } ?>
                </div>
            </div>
        </div>

        <div class="news__slider__wrapper">
            <div class="card__slider">
                <?php
                $news = new WP_Query(array(
                    "posts_per_page" => 10,
                    "post_type" => "post",
                    "orderby" => "meta_value_num",
                    "order" => "DSC"
                ));
                while ($news->have_posts()) {
                    $news->the_post(); ?>
                    <div>
                        <?php get_template_part("inc/partials/news-card"); ?>
                    </div>
                    <?php
                }
                wp_reset_postdata();
                ?>
            </div>
        </div>
    </div>
</section>

