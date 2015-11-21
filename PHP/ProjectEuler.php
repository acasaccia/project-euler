<?php
$start = microtime(true);
require('Problems/' . $argv[1] . '.php');
$elapsed = microtime(true) - $start;
echo "Elapsed: [" . number_format( $elapsed, 3 ) . "\"]";
