<?php
	ini_set('display_startup_errors',1);
	ini_set('display_errors',1);
	error_reporting(-1);	
	
	 

	$input = "../data/lists.json";
	$json = json_decode(file_get_contents($input));
	
	array_push($json, $_POST);
	
	$output = "../data/lists.json";
	file_put_contents($output, json_encode($json));
	


?>