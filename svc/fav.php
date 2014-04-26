<?php

ini_set('display_startup_errors',1);
ini_set('display_errors',1);
error_reporting(-1);	



$id = (int) ($_POST['id']);
$fav = $_POST['fav'] === "true" ? true : false;

$input = "../data/lists.json";
$json = json_decode(file_get_contents($input));

$i = 0;
foreach($json as &$list) {
	if ($list->id === $id) {
		$list->fav = $fav;
	}
}


$output = "../data/lists.json";
file_put_contents($output, json_encode($json));


?>