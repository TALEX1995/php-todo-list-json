<?php

// Address database
$database_path = __DIR__ . '/../../database/tasks.json';

// Get json database file
$json_data = file_get_contents($database_path);

// Base data
$tasks = json_decode($json_data, true);


// Check POST
$new_task = $_POST['task'] ?? null;

// Add new task
if ($new_task) {
    $tasks[] = $new_task;

    // Add tasks array with new task in tasks.json
    $json_tasks = json_encode($tasks);
    file_put_contents($database_path, $json_tasks);
}

// Specific type file
header('Content-Type: application/json');

// Encode tasks
echo json_encode($tasks);
