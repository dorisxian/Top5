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
		
		function init(){
			var ele = $('#t5-list-template').clone().removeAttr('id').removeClass('t5-template');
			ele.prependTo(_container);
			_container.isotope('prepended', ele);
			
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
			ele.find('.t5-ranking-box').hover(function () {
				var specific = "." + $(this).attr('class').slice(15) + "-pic";
				ele.find('li').siblings(".t5-pic").addClass('hidden');
				ele.find(specific).removeClass('hidden');
			});
			
			
			var selected = false;
			ele.find('.t5-list-heart').click(function(){
				selected = !selected;
				if (selected) {
					$(this).addClass('t5-selected');
				} else {
					$(this).removeClass('t5-selected');					
				}
			});
		}
		init();
	};
});
