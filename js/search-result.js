/*jslint browser: true*/
	
$(document).ready(function () {
	$('#result-tabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
});