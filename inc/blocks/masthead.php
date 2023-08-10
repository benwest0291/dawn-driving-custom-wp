<?php
$subheading = get_field('subheading');
$heading = get_field('heading');
$paragraph = get_field('paragraph');
$button_text_one = get_field('button_text_one');
$button_text_one_url = get_field('button_text_one_url');
$button_text_two = get_field('button_text_two');
$button_text_two_url = get_field('button_text_two_url');
$bg_image = get_field('bg_image');
$credential = get_field('credential');
?>
<section class="masthead" style="background-image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(<?php echo ($bg_image != null ? $bg_image['url'] : ''); ?>);" alt="<?php echo $bg_image['alt']; ?>">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8">
                <?php if ($subheading != null) { ?>
                    <h4 class="masthead__subheading mb-2"><?php echo $subheading ;?></h4>
                <?php } ?>

                <?php if ($heading != null) { ?>
                    <h1 class="masthead__heading"><?php echo $heading ;?></h1>
                <?php } ?>

                <?php if ($paragraph != null) { ?>
                    <p class="masthead__paragraph mt-md-3 w-75"><?php echo $paragraph; ?></p>
                <?php } ?>
                <div class="mt-4 mb-4">
                    <?php if ($button_text_one_url != null && $button_text_one != null) { ?>
                         <a title="<?php echo $button_text_one;?>" class="btn__primary mr-4" href="<?php echo $button_text_one_url; ?>"><?php echo $button_text_one; ?></a>
                    <?php } ?>

                    <?php if ($button_text_two_url != null && $button_text_two != null) { ?>
                        <a title="<?php echo $button_text_two;?>" class="btn__secondary" href="<?php echo $button_text_two_url; ?>"><?php echo $button_text_two; ?></a>
                    <?php } ?>
                </div>
                <?php if ($credential != null) { ?>
                    <img class="masthead__credential mt-3" src="<?php echo $credential['url'];?>" alt="<?php echo $credential['alt']; ?>" />
                <?php } ?>
            </div>

            <div class="col-12 col-lg-4">
                <!--Empty for bg-->
            </div>
        </div>
    </div>
</section>
