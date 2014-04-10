/*global alert */
if (!$.top5){
	$.top5 = {};
}
else if ($.top5.listAdding){
	return;
}

$(function(){

	$.top5.listAdding = (function(){
		var _open = false, _catMenuOpen = false;
		var _cat, _item;
		var _data;
		
		function init(){
			$.ajax({
				//url: 'parts/list_adding.html'
				url: '../parts/list_adding.html'
				, success: function(res){
					$(res).appendTo($('#t5-list-adding'));
				}
				,async: false
			});
			
			$('#t5-list-adding-btn').click(function(){
				_open = !_open;
				render_open();
				$("#t5-list-title-input").focus();
			});
			
			// cat menu
			
			$('#t5-list-cat-wrap').click(function(){
				_catMenuOpen = !_catMenuOpen;
				render_cat_menu();
			});
			
			$('.t5-la-cat-item').click(function(){
				_catMenuOpen = false;
				render_cat_menu();
				set_cat($(this));
			});
			
			// item
			
			$('.t5-la-item > span').click(function(){
				set_item($(this).parent('.t5-la-item'));
			});
			
			$('#t5-la-items').sortable({change: function(evt, ui){
				//debugger;
				//console.log('here');
			}, update: function(evt, ui){
				render_items_order();
			}});
			
			// item form
			
			$('#t5-la-item-btn').click(function(){
				append_item_data({
					title: $('#t5-la-item-input').val(),
					comment: $('#t5-la-item-comment').val()
				});
				// move to next item
				if (_item.index() === 4) {
					set_item(_item.siblings().eq(0));
				} else {
					set_item(_item.next());
				}
			});
			
			
			// save button
			
			$('#t5-save-list-btn').click(function(){
				_data.title = $('#t5-list-title-input').val();
				if( !_data.title ) {
					alert("Must enter list title!");
					$("#t5-list-title-input").focus();
					$('#t5-list-title-input').addClass('warning');
					return;
			    }
				if (!_cat) {
					alert("Must select category!");
					return;
				}
				_data.category = _cat.html();
				
				// send data
				
				reset();
				
				_open = false;
				render_open();
			});
			
			reset();
			render();
			
			//$('#t5-list-title-input').focus();
		}
		
		function reset(){
			$('#t5-list-title-input').val('');
			set_cat();
			_data = {title:undefined, category:undefined, items:[]};		
			$('.t5-la-item > div').html('');
			set_item($('.t5-la-item').eq(0));
		}
		
		function render(){
			render_cat_menu();
			render_open();
		}
		
		function render_open(){
			if (_open) {
				$('#t5-list-adding').slideDown();
			} else {
				$('#t5-list-adding').slideUp();					
			}
		}
		
		function render_cat_menu(){
			if (_catMenuOpen) {
				$('#t5-list-cat-menu').show();
				$('#t5-list-cat-wrap').addClass('t5-open');
			} else {
				$('#t5-list-cat-menu').hide();
				$('#t5-list-cat-wrap').removeClass('t5-open');				
			}
		}
		
		function render_item_data(item){
			/*
			var index = item.index();
			item.children('div').html(_data.items[index].title);
			*/
			var data = item.data('t5-item');
			if (data) item.children('div').html(data.title);
		}
		
		function render_items_order(){
			$('.t5-la-item span').each(function(index){
				$(this).html(index + 1);
			});
		}
		
		function set_cat(cat){
			if (_cat) _cat.removeClass('t5-selected');
			_cat = cat;
			var title = $('#t5-la-cat-title'); 
			if (_cat) {
				title.html(_cat.html());				
				_cat.addClass('t5-selected');
			} else {
				title.html("Category");
			}
		}
	
		
		function set_item(item){
			if (_item) _item.removeClass('t5-selected');
			_item = item;
			_item.addClass('t5-selected');
			
			var index = _item.index();
			var title = '', comment = '';
			/*
			if (_data.items[index]) {
				title = _data.items[index].title;
				comment = _data.items[index].comment
			}
			*/
			var data = _item.data('t5-item');
			if (data) {
				title = data.title;
				comment = data.comment				
			}
			
			$('#t5-la-item-input').val(title).focus();
			$('#t5-la-item-comment').val(comment);
		}
		
		function append_item_data(itemData){
			/*
			var index = _item.index();
			_data.items[index] = itemData;
			*/
			_item.data('t5-item', itemData);
			render_item_data(_item);
		}
		
		
		
		
		init(); 
	})();

});
