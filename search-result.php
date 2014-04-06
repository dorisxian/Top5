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
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="row">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="col-md-4">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a href="#"><img class="navbar-brand" src="img/logo.png" alt=""></a>
            </div>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><a href=""><i class="fa fa-home fa-lg"></i></a></li>
            </ul>
            <form class="navbar-form navbar-left" role="search" action="/search-result.php" method="POST">
              <div class="form-group t5-nav-search">
                <input type="text" name="keyword" class="form-control typeahead" placeholder="Search for people, lists, things, etc..." value="<?php echo $_POST['keyword']; ?>">
				<button type="submit"></button>
              </div>
            </form>
            <ul class="nav navbar-nav">
              <li><a href=""><i class="fa fa-edit fa-lg"></i></a></li>
            </ul>
            
            <!-- ***User - Name & Setting button*** -->
            <ul class="nav navbar-nav navbar-right">
              <li class="username light">dorisxian</li>

              <li class="dropdown user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-user"></i><b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="#"><i class="fa fa-gear fa-lg"></i><span class="user-menu-text">Settings</span></a></li>
                  <li class="divider"></li>
                  <li><a href="#"><i class="fa fa-sign-out fa-lg"></i><span class="user-menu-text">Logout</span></a></li>
                </ul>
              </li>
            </ul>

            <!--  ***Guest - Login & Sign Up*** -->
<!--

            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
               <a href="" class="dropdown-toggle" data-toggle="dropdown">Sign Up<b class="caret"></b></a>
               <ul class="dropdown-menu" style="padding: 15px;min-width: 250px;">
                  <li>
                     <div class="row">
                        <div class="col-md-12">
                           <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                              <div class="form-group">
                                 <label class="sr-only" for="user-email">Email</label>
                                 <input type="email" class="form-control" id="user-email" placeholder="Email" required>
                              </div>
                              <div class="form-group">
                                 <label class="sr-only" for="user-username">Username</label>
                                 <input type="text" class="form-control" id="user-username" placeholder="Username" required>
                              </div>
                              <div class="form-group">
                                 <label class="sr-only" for="user-password">Password</label>
                                 <input type="password" class="form-control" id="user-password" placeholder="Password" required>
                              </div>
                              <div class="form-group">
                                 <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </li>
                </ul>
              </li>

              <li class="dropdown">
                 <a href="" class="dropdown-toggle" data-toggle="dropdown">Login<b class="caret"></b></a>
                 <ul class="dropdown-menu" style="padding: 15px;min-width: 250px;">
                    <li>
                       <div class="row">
                          <div class="col-md-12">
                             <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                                <div class="form-group">
                                   <label class="sr-only" for="user-email">Email</label>
                                   <input type="email" class="form-control" id="user-email" placeholder="Email" required>
                                </div>
                                <div class="form-group">
                                   <label class="sr-only" for="user-password">Password</label>
                                   <input type="password" class="form-control" id="user-password" placeholder="Password" required>
                                </div>
                                <div class="form-group">
                                   <button type="submit" class="btn btn-primary btn-block">Login</button>
                                </div>
                             </form>
                          </div>
                       </div>
                    </li>
                    <li class="divider"></li>
                    <a class="btn btn-block btn-social btn-facebook">
                      <i class="fa fa-facebook"></i>Login with Facebook
                    </a>
                    <a class="btn btn-block btn-social btn-twitter">
                      <i class="fa fa-twitter"></i>Login with Twitter
                    </a>
                    <a class="btn btn-block btn-social btn-google-plus">
                      <i class="fa fa-google-plus"></i>Login with Google+
                    </a>
                 </ul>
              </li>
            </ul>
-->

            <div class="col-md-1"></div>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </nav>

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
    <!-- Bootstrap js -->
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <!-- Search bar autocomplete -->
    <script src="js/min/search-ck.js" type="text/javascript"></script>
    <!-- Page js -->
    <script>
	$("#t5-cat-menu").load("parts/menu.html");
	
	$(document).ready(function () {
		$('#result-tabs a').click(function (e) {
			e.preventDefault();
			$(this).tab('show');
		});
	});
    </script>
  </body>
</html>
