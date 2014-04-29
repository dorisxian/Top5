<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
    <title>Top 5</title>
    <!-- Google Font: Playball -->
    <link href='http://fonts.googleapis.com/css?family=Playball' rel='stylesheet' type='text/css'>
    <!-- JQuery UI for list adding -->
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
    <!-- Bootstrap -->
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/t5-theme.min.css">
    <link rel="stylesheet" href="css/bootstrap-social.css">
    <!-- Font Awesome -->
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <!-- Page CSS -->
    <link rel="stylesheet" href="css/search-result.css">
  </head>

  <body>
    <!-- Top Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    </nav>

	<div id='t5-list-adding'></div>

    <!-- Category Menu -->
    <section id='t5-cat-menu'></section>
    <h3 class='t5-headline'><span class="highlight">Share</span> and <span class="highlight">discover</span> Top 5 things in your life, 
    or inspired by awesome people!</h3>
    <div class="row">
	    <section class="col-md-9 search-result centered">
	        <div class="row t5-header">
	        	
		        <div class="col-sm-4 col-md-4">
		            <p class="h2">Search Result</p>
		        </div>
		        <div class="col-sm-8 col-md-8">
			        <form class="t5-search-box" action="search-result.php" method="POST">
		                <input id='t5-search-input-2' type="text" name="keyword" class="form-control typeahead" placeholder="Search for people, lists, things, etc..." value="<?php echo $_POST['keyword']; ?>">
		                <button type="submit"></button>
		            </form>
		        </div>
	        </div><!-- end of header -->
			<div class="row t5-result">
				<ul class="nav nav-tabs" id="result-tabs">
					<li class="t5-tab-title"><a href="#result-people">People (0)</a></li>
					<li class="t5-tab-title active"><a href="#result-lists">Lists (<span id='t5-lists-num'>0</span>)</a></li>
					<li class="t5-tab-title"><a href="#result-items">List Items (7)</a></li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane in" id="result-people">
						<div class="col-md-10 centered">
							<p class="t5-no-result">No matches</p>
						</div>
					</div>
					<div class="tab-pane active" id="result-lists"></div>
					<div class="tab-pane " id="result-items"> To be implemented.</div>
				</div>
			</div>
	      
	    </section>
    </div>
    
    <!-- Latest jQuery -->
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <!-- JQuery UI for list adding -->
    <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.min.js"></script>
    <!-- Bootstrap js -->
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <!-- Cookie -->
    <script src="js/jquery.cookie.js" type="text/javascript"></script>
    <!-- Search bar autocomplete -->
    <!--
    <script src="js/min/search-ck.js" type="text/javascript"></script>
    -->
    <!-- Page js -->
    <script src="js/list.js" type="text/javascript"></script>
    <script>
	
	$(document).ready(function () {
		
		$("#t5-cat-menu").load("parts/menu.html");
		$('nav').load('parts/navbar.html', function(){
			$.getScript('js/listAdding.js');
			$.getScript('js/min/search-ck.js');
			if ($.cookie("username") === 'Dolly') {
				$('#t5-navbar-login').addClass('hidden');
				$('#t5-navbar-name').removeClass('hidden');
			}
		});
		
		$('#result-tabs a').click(function (e) {
			e.preventDefault();
			$(this).tab('show');
		});

		
		var ky = $('#t5-search-input-2').val();
		//alert(ky);
  		$.getJSON("data/lists.json", function(listsData){
  			var i = 0;
  			$.each(listsData, function(index, listData){
  				if (listData.title.search(new RegExp(ky, 'i')) !== -1) {
 	     			var list = new $.top5.List(listData, $('#result-lists'));
					i++;  					
  				}
  			});
  			$('#t5-lists-num').html(i);
  		});
		
		
		
	});
    </script>
  </body>
</html>
