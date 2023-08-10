<?php
$background_image = $data['background_image'];
$heading = $data['main_heading'];
$button_text = $data['button_text'];
$button_link = $data['button_link'];
?>


<section class="lower__banner" style="background-image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(<?php echo ($background_image != null ? $background_image['url'] : ''); ?>);" alt="<?php echo $background_image['alt']; ?>">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6">
                <?php if ($heading != null) { ?>
                    <h2 class="lower__banner__heading mb-4"><?php echo $heading ?></h2>
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