/*jshint laxcomma: true */
/*jshint -W098 */

if (!$.top5){
	$.top5 = {};
}
else if ($.top5.list){}

$(function(){

	//$('#t5-templates').load('parts/list_template.html');
	
	var _templateStr;
	$.ajax({
		url: 'parts/list_template.html'
		//url: '../parts/list_template.html'
		, success: function(res){
			$(res).appendTo($('body'));
		}
		,async: false
	});

	$.top5.List = function(data, container){
		var _data = data;
		var _container = container;
		var _ele;
		
		function init(){
			var ele = $('#t5-list-template').clone().removeAttr('id').removeClass('t5-template');
			_ele = ele;
			ele.prependTo(_container);
			if (_container.isotope) _container.isotope('prepended', ele);
			
			ele.removeClass().addClass('list-item');
			ele.addClass(_data.filterClass);
			ele.find('.t5-list-title').html(_data.title);
			if (_data.user) {
				ele.find('.t5-user-pic').attr('src', _data.user.image);
				ele.find('.t5-user-name').html(_data.user.username);
			}
			var itemImages = ele.find('.t5-item-image');
			var itemTitles = ele.find('.t5-list-item');
			$.each(_data.items, function(index, item){
				if (!item) return;
				itemImages.eq(index).attr('src', item.image);
				itemTitles.eq(index).html(item.title);
			});
			ele.find('.t5-ranking-list').find('li').hover(function () {
				var ranking = $(this).find('.t5-ranking-box');
				var specific = "." + ranking.attr('class').slice(15) + "-pic";
				ele.find('li').siblings(".t5-pic").addClass('hidden');
				ele.find(specific).removeClass('hidden');
			});
			
			render_fav();
			ele.find('.t5-list-heart').click(function(){
				if (!$.cookie('username')) {
					alert('Please login first.');
					return;
				}
				_data.fav = !_data.fav;
				$.post('svc/fav.php', {id:_data.id, fav:_data.fav}, function(){
					render_fav();
					//$.top5.fav = _data;
					$.top5.container = _container;
					$('body').trigger('t5-fav');
				});
			});
			
			ele.find('.t5-list-change span').click(function(){
				alert("To be implemented.");
			});
			
			
		}
		
		function fav_alert(){
			alert('Please login first! ');
		}
		
		function render_fav(){
			if (!$.cookie('username')) return;
			var heart = _ele.find('.t5-list-heart');
			if (_data.fav) {
				heart.addClass('t5-selected');
			} else {
				heart.removeClass('t5-selected');					
			}
		}
		
		
		
		init();
	};
});
