<?php
$facebook = get_theme_mod('facebook');
$instagram = get_theme_mod('instagram');
?>

<section class="d-flex justify-content-end">
    <div class="social__side">
        <?php if ($facebook != null) { ?>
            <a class="social__side__facebook" href="<?php echo $facebook; ?>" target="_blank"><i class="social__side__facebook mb-2  pt-2  fa-brands fa-facebook"></i></a>
        <?php } ?>

        <?php if ($instagram != null) { ?>
            <a class="social__side__insta" href="<?php echo $instagram; ?>" target="_blank"><i class="social__side__insta pt-1 pb-2 fa-brands fa-instagram"></i></a>
        <?php } ?>
    </div>
</section>
