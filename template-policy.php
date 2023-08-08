<?php
/* Template Name: Terms & Conditions */

get_header();
$content = get_field('content');
render_banner('privacy_banner');?>

<section class="mt-4 mb-4">
    <div class="container">
        <?php echo $content; ?>
    </div>
</section>

<?php
get_footer();