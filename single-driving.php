
<?php get_header(); ?>

<div class="container top__spacing">

      <?php if(has_post_thumbnail()):?>
               <img src="<?php the_post_thumbnail_url('blog-large');?>"alt="<?php
                  the_title();?>"class="img-fluid mt-5 mb-3img-thumbnail">
      <?php endif;?>


<h2><?php the_title();?></h2>
<p><?php the_content(); ?></p>


</div>
</div>




<?php get_footer(); ?>
