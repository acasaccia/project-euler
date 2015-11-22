<?php
$start = microtime(true);
require('problems/' . $argv[1] . '.php');
$elapsed = microtime(true) - $start;
echo "Elapsed: [" . number_format( $elapsed, 3 ) . "\"]";
