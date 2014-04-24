<?php
	ini_set('display_startup_errors',1);
	ini_set('display_errors',1);
	error_reporting(-1);	



	$imageFile = $_FILES['t5-la-image-file'];
	if (!move_uploaded_file($imageFile['tmp_name'], '../item_img/'.$imageFile['name'])) {
		echo "UploadFaile";
		exit;
	}
	$image = 'img/'.$imageFile['name'];
	
	echo $image;
	
?>
	 