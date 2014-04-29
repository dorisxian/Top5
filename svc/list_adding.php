<?php
	ini_set('display_startup_errors',1);
	ini_set('display_errors',1);
	error_reporting(-1);	
	
	 

	$input = "../data/lists.json";
	$json = json_decode(file_get_contents($input));
	
	//echo var_dump(current($json));
	$lastId = end($json)->id;
	
	$num = array_push($json, $_POST);
	
	(array)$json[$num - 1]['id'] = $lastId + 1;
	
	
	$output = "../data/lists.json";
	file_put_contents($output, json_encode($json));


	// save to items.json
	
	$input = "../data/items.json";
	$json = json_decode(file_get_contents($input));
	foreach($_POST['items'] as $item){
		array_push($json, $item['title']);
	}	
	$output = "../data/items.json";
	file_put_contents($output, json_encode($json));
	
	
	// save to lists_title.json
	
	$input = "../data/lists_title.json";
	$json = json_decode(file_get_contents($input));
	array_push($json, $_POST['title']);
	$output = "../data/lists_title.json";
	file_put_contents($output, json_encode($json));
		

?>