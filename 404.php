<?php
/**
* The template for displaying 404 pages (Not Found)
*/

get_header();

?>

<section class="error__banner">
    <div class="container">
        <h6 class="text-center color-red error__banner__sm__heading">404 Error</h6>
        <h2 class="text-center error__banner__main__heading">Whoops, this wasn’t <br> supposed to happen 😱</h2>
        <p class="text-center mt-2">It looks like we can’t find this page</p>
        <div class="d-flex justify-content-center pb-5">
            <a class="main__btn mt-2" href="<?php echo site_url("/") ?>">Back to homepage</a>
        </div>
    </div>
</section>

<?php
include("inc/blocks/news.php");

get_footer();
?>
?>
