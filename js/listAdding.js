/*global alert */
if (!$.top5){
	$.top5 = {};
}
else if ($.top5.listAdding){
	return;
}


$(function(){
	/*jslint browser: true*/
	var substringMatcher = function(strs) {
	  return function findMatches(q, cb) {
	    var matches, substrRegex;
	 
	    // an array that will be populated with substring matches
	    matches = [];
	 
	    // regex used to determine if a string contains the substring `q`
	    substrRegex = new RegExp(q, 'i');
	 
	    // iterate through the pool of strings and for any string that
	    // contains the substring `q`, add it to the `matches` array
	    $.each(strs, function(i, str) {
	      if (substrRegex.test(str)) {
	        // the typeahead jQuery plugin expects suggestions to a
	        // JavaScript object, refer to typeahead docs for more info
	        matches.push({ value: str });
	      }
	    });
	 
	    cb(matches);
	  };
	};
	

	$.top5.listAdding = (function(){
		var _open = false, _catMenuOpen = false;
		var _cat, _item;
		var _data;
		
		function init(){
			$.ajax({
				url: 'parts/list_adding.html'
				//url: '../parts/list_adding.html'
				, success: function(res){
					$(res).appendTo($('#t5-list-adding'));
					$('#t5-la-url-modal').appendTo($('body'));
				}
				,async: false
			});
			
			$('#t5-list-adding-btn').click(function(){
				if (!$.cookie('username')) {
					alert('Please login first.');
					return;
				}
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
				save_curr_item();
				set_item($(this).parent('.t5-la-item'));
			});
			
			$('#t5-la-items').sortable({change: function(evt, ui){
				//debugger;
				//console.log('here');
			}, update: function(evt, ui){
				render_items_order();
			}});
			
			
			var item = (function () {
				$.ajax({
			        'async': false,
			        'global': false,
			        'url': "data/items.json",
			        'dataType': "json",
			        'success': function (data) {
			            item = data;
			        }
			    });
				return item;
			})();
			// applied typeahead to the text input box

/*
			$('#t5-la-item-input').typeahead({
				hint: true,
				highlight: true,
				minLength: 1
			},{
				name: 'items',
				displayKey: 'value',
				source: substringMatcher(item)
			});
			*/
			
			// item form
			$('.t5-la-image-icon:nth-child(1)').click(function(){
				$('#t5-la-image-file').click();
			});
			$('#t5-la-image-file').on('change', function(ev) {
				/*
			    var f = ev.target.files[0];
			    var fr = new FileReader();
			
			    fr.onload = function(ev2) {
			        console.dir(ev2);
			        $('#t5-la-item-image img').attr('src', ev2.target.result);
			        $('#t5-la-item-image').addClass('t5-filled');
			    };
			
			    fr.readAsDataURL(f);
			    */
			   	
				if ($(this).val() === '') return;
				if (!window.FormData) return;
				var formData = new FormData($('#t5-la-image-form').get(0));
				$.ajax({
					url: "svc/image_upload.php",
					type: "POST",
					data: formData,
					processData: false,
					contentType: false,  
					success: function (res) {
				        $('#t5-la-item-image img').attr('src', res);
				        $('#t5-la-item-image').addClass('t5-filled');
					}
				});
				
			   
			   
			});
			
			
			
			$('#t5-la-url-modal').on('shown.bs.modal', function(){
				$('#t5-la-image-url').focus();
			});
			$('#t5-la-url-btn').click(function(){
			    $('#t5-la-item-image img').attr('src', $('#t5-la-image-url').val());
			    $('#t5-la-item-image').addClass('t5-filled');
				$('#t5-la-url-modal').modal('hide');
			});
			
			
			$('#t5-la-item-input, #t5-la-item-comment').keypress(function(e){
				if(e.which == 13) {
					save_curr_item();
					// move to next item
					if (_item.index() === 4) {
						set_item(_item.siblings().eq(0));
					} else {
						set_item(_item.next());
					}
			    }				
			});
			
			/*
			$('#t5-la-item-btn').click(function(){
				var src = $('#t5-la-item-image img').attr('src');
				src = src.indexOf("alt-item.png") === -1 ? src : undefined;
				append_item_data({
					title: $('#t5-la-item-input').val(),
					comment: $('#t5-la-item-comment').val()
					, image: src
				});
				// move to next item
				if (_item.index() === 4) {
					set_item(_item.siblings().eq(0));
				} else {
					set_item(_item.next());
				}
			});
			*/
			
			
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
				save_curr_item();
				
				// populate data
				_data.category = _cat.html();
				_data.user = {username:"Dolly", image:'img/dolly.png'}
				_data.items = [];
				$('.t5-la-item').each(function(){
					_data.items.push($(this).data('t5-item'));
				});
				// send data
				$.post('svc/list_adding.php', _data, function(res){
					//var list = new $.top5.List(_data, $('#feed'));
					$.top5.la = _data;
					$('body').trigger('t5-la');
				});
				
				_open = false;
				render_open(function(){
					reset();					
				});
			});
			
			// close
			$('#t5-la-closing').click(function(){
				_open = false;
				render_open();
			});
			
			reset();
			render();
			
			//$('#t5-list-title-input').focus();
		}
		
		function save_curr_item(){
			var src = $('#t5-la-item-image img').attr('src');
			src = src.indexOf("alt-item.png") === -1 ? src : undefined;
			append_item_data({
				title: $('#t5-la-item-input').val(),
				comment: $('#t5-la-item-comment').val()
				, image: src
			});
		}
		
		function reset(){
			$('#t5-list-title-input').val('');
			set_cat();
			_data = {title:undefined, category:undefined, items:[]};		
			$('.t5-la-item > div').html('');
			$('.t5-la-item').removeData('t5-item');
			set_item($('.t5-la-item').eq(0));
		}
		
		function render(){
			render_cat_menu();
			render_open();
		}
		
		function render_open(cb){
			if (_open) {
				$('#t5-list-adding').slideDown();
				$('#t5-list-adding-btn').addClass('t5-focus');
				$('body').animate({'padding-top':390}, {duration:400});
			} else {
				$('#t5-list-adding').slideUp({complete: function(){
					$('#t5-list-adding-btn').removeClass('t5-focus');
					if (cb)	cb();
				}});
				$('body').animate({'padding-top':70}, {duration:400});
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
			
			var data = _item.data('t5-item');
			
			$('#t5-la-item-input').val(data ? data.title : '').focus();
			$('#t5-la-item-comment').val(data ? data.comment : '');
			$('#t5-la-item-image').removeClass('t5-filled');
			if (data && data.image){
				$('#t5-la-item-image').addClass('t5-filled');
				$('#t5-la-item-image img').attr('src', data.image);
			} else {
				$('#t5-la-item-image img').attr('src', 'img/alt-item.png');				
			}
			
			$('#t5-la-image-url').val('');
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



