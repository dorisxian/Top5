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
    <link rel="stylesheet" type="text/css" href="css/list_adding.css"/>
    <link rel="stylesheet" href="css/search-result.css">
  </head>

  <body>
    <!-- Top Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    </nav>

	<div id='t5-list-adding'></div>

    <!-- Category Menu -->
    <section id='t5-cat-menu'></section>
    <h3><span class="highlight">Share</span> and <span class="highlight">discover</span> Top 5 things in your life, 
    or inspired by awesome people!</h3>
    <div class="row">
	    <section class="col-md-9 search-result centered">
	        <div class="row t5-header">
	        	
		        <div class="col-sm-4 col-md-4">
		            <p class="h2">Search Result</p>
		        </div>
		        <div class="col-sm-8 col-md-8">
			        <form class="t5-search-box" action="/search-result.php" method="POST">
		                <input type="text" name="keyword" class="form-control typeahead" placeholder="Search for people, lists, things, etc..." value="<?php echo $_POST['keyword']; ?>">
		                <button type="submit"></button>
		            </form>
		        </div>
	        </div><!-- end of header -->
			<div class="row t5-result">
				<ul class="nav nav-tabs" id="result-tabs">
					<li class="t5-tab-title"><a href="#result-people">People (0)</a></li>
					<li class="t5-tab-title active"><a href="#result-lists">Lists (3)</a></li>
					<li class="t5-tab-title"><a href="#result-items">List Items (7)</a></li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane fade in" id="result-people">
						<div class="col-md-10 centered">
							<p class="t5-no-result">No matches</p>
						</div>
					</div>
					<div class="tab-pane fade active" id="result-lists">lists</div>
					<div class="tab-pane fade" id="result-items">items</div>
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
    <!-- Search bar autocomplete -->
    <script src="js/min/search-ck.js" type="text/javascript"></script>
    <!-- Page js -->
    <script>
	
	$(document).ready(function () {
		
		$("#t5-cat-menu").load("parts/menu.html");
		$('nav').load('parts/navbar.html', function(){
			$.getScript('js/listAdding.js');
		});
		
		$('#result-tabs a').click(function (e) {
			e.preventDefault();
			$(this).tab('show');
		});
	});
    </script>
  </body>
</html>
