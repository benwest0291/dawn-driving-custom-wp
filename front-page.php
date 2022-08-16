<?php
get_header();
?>

<?php
include(get_template_directory() . '/inc/partials/masthead.php');
?>
<div class="container">
<?php
include(get_template_directory() . '/inc/blocks/txtandimages.php');
include(get_template_directory() . '/inc/partials/blogcard.php');

include(get_template_directory() . '/inc/partials/testimonial.php');
?>
</div>

<?php get_footer(); ?>
