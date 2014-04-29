	$('#t5-logout').click(function(){
		$.removeCookie('username');
		if (window.location.href.search('user-profile') === -1 ) {
			window.location.reload();
		} else {
			window.location.href = 'index.html';			
		}
	});



      $('#t5-navbar-login-btn').click(function(evt){
      	var username = $('#t5-navbar-login-username').val();
      	var password = $('#t5-navbar-login-password').val();
      	if (username === 'Dolly' & password === 'Dolly') {
      		$.cookie("username", "Dolly");
			window.location.reload();
      	} else {
      		alert("Username or password incorrect, please try again.");
      		evt.preventDefault();
      		$('#t5-navbar-login-username').focus();
      	}
      });

