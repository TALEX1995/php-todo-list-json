<?php
// Base data
$tasks = ['HTML', 'CSS', 'Laravel', 'Vue', 'PHP', 'Javascript'];


// Specific type file
header('Content-Type: application/json');

// Encode tasks
echo json_encode($tasks);
