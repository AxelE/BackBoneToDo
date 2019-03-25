<?php
require 'vendor/autoload.php';
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();


$app = new \Slim\Slim();
$app->response->headers->set('Content-Type', 'application/json');

$app->get('/', function () {
    echo 'Hello world';
});

$app->get('/todos/:id', function ($id) {
    echo json_encode(array("id" => $id, "title" => "Todo", "duedate" => "2019-12-29", "status" => "pending"));
});

$app->get('/todos', function () {
    $test = array(
        array("id" => 1, "title" => "Todo", "duedate" => "2019-12-29", "status" => "pending"),
        array("id" => 2, "title" => "Not Todo", "duedate" => "2020-12-29", "status" => "cancel"),
        array("id" => 3, "title" => "Tododo", "duedate" => "2022-12-29", "status" => "done"),
    );
    echo json_encode($test);
});

$app->post('/todos', function() {});
$app->put('/todos/:id', function ($id) {});
$app->delete('/todos/:id', function ($id) {});

$app->run();

?>