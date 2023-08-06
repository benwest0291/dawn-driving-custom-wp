<?php
get_header();

include("inc/blocks/masthead.php");

include('inc/blocks/introduction.php');

include('inc/blocks/superstar-slider.php');

render_lower_banner('lower_banner_homepage');

include('inc/blocks/news-slider.php');

get_footer();