<?php
	ini_set('display_startup_errors',1);
	ini_set('display_errors',1);
	error_reporting(-1);	
	
	 

	$input = "../data/lists.json";
	$json = json_decode(file_get_contents($input));
	
	$lastId = end($json)->id;
	
	$num = array_push($json, $_POST);
	
	$new = (array)$json[$num - 1];
	$new['id'] = $lastId + 1;
	
	
	$output = "../data/lists.json";
	file_put_contents($output, json_encode($json));


	// save to items.json
	
	$input = "../data/items.json";
	$json = json_decode(file_get_contents($input));
	foreach($new['items'] as $item){
		array_push($json, $item['title']);
	}	
	$output = "../data/items.json";
	file_put_contents($output, json_encode($json));
	

?>