<div class="blog__card mt-5 ml-5">
   <?php if(has_post_thumbnail()):?>
               <img class="blog__card-image w-100" src="<?php the_post_thumbnail_url('blog-small');?>"alt="<?php
                  the_title();?>"class="img-fluid mt-5 mb-3img-thumbnail">
      <?php endif;?>
      <!-- <img class="blog__card-image w-100" src="<?php echo get_template_directory_uri() . '/assets/images/studentpassing.jpeg'; ?> "/> -->
      <h4 class="blog__card-heading mt-3 ml-2"><?php the_title();?></h4>
      <p class="blog__card-par mt-1 m-2"><?php the_excerpt();?></p>
      <a href="<?php the_permalink(); ?>"> Read more</a>
</div>
