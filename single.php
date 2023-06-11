<?php
get_header();
while (have_posts()) {
    the_post();
    render_masthead("banner_single_news");
    $extraContant = get_field("extra_content");
    ?>
    <div class="single__post mb-5">
        <div class="container">
            <div class="p-md-5 pt-5">
                <h3><?php the_title(); ?></h3>
                <p><?php the_content(); ?></p>
            </div>

            <img class="single__post__image w-100" src=" <?php echo the_post_thumbnail_url("post"); ?>">

            <div class="p-md-5">
                <p><?php echo $extraContant; ?></p>
                <div class="single__news__share mt-3">
                    <button class="facebook__share mb-1">Share on Facebook <i class="fa-brands fa-facebook"></i></button>
                    <button class="instagram__share">Share on Instagram <i class="fa-brands fa-instagram "></i></button>
                </div>
            </div>
        </div>
    </div>
<?php
}
get_footer();
?>
