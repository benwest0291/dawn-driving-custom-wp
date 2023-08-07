<?php

if (have_rows('accordion')) { ?>
    <section class="accordion">
        <div class="container">
            <div class="accordion__block" >
                <?php
                $index = 0; // Initialize an index variable to generate unique IDs
                while (have_rows('accordion')) {
                    the_row();
                    $question = get_sub_field('question');
                    $answer = get_sub_field('answer');
                    $collapse_id = 'collapse_' . $index;
                    $heading_id = 'heading_' . $index;
                    ?>
                    <div class="accordion__item" data-bs-toggle="collapse" data-bs-target="#<?php echo $collapse_id; ?>" aria-expanded="false" aria-controls="<?php echo $collapse_id; ?>">
                        <div class="accordion__header d-flex justify-content-between" id="<?php echo $heading_id; ?>">
                            <?php if ($question != null) { ?>
                                <h6 class="accordion__question mt-1">
                                    <?php echo $question; ?>
                                </h6>
                            <?php } ?>
                            <div>
                                <i class="fa-solid fa-chevron-right accordion__arrow"></i>
                            </div>
                        </div>
                        <div id="<?php echo $collapse_id; ?>" class="collapse" aria-labelledby="<?php echo $heading_id; ?>">
                            <div class="accordion__body p-2">
                                <p><?php echo $answer; ?></p>
                            </div>
                        </div>
                    </div>
                    <?php
                    $index++; // Increment the index for the next iteration
                }
                ?>
            </div>
        </div>
    </section>
<?php } ?>
