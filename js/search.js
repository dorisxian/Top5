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
$(document).ready(function () {
	var ppl = (function () {
	$.ajax({
        'async': false,
        'global': false,
        'url': "../data/people.json",
        'dataType': "json",
        'success': function (data) {
            ppl = data;
        }
    });
	return ppl;
	})();
	
	var item = (function () {
	$.ajax({
        'async': false,
        'global': false,
        'url': "../data/items.json",
        'dataType': "json",
        'success': function (data) {
            item = data;
        }
    });
	return item;
	})();
	// applied typeahead to the text input box
	$('.typeahead').typeahead({
	hint: true,
	highlight: true,
	minLength: 1
	},
	{
	// data source one
		name: 'people',
		displayKey: 'value',
		source: substringMatcher(ppl),
		templates: {
			header: '<h4 class="t5-sr-title">People</h4>',
			empty: [
			'<div class="empty-message">','no matches','</div>'
			].join('\n')
		}
	},
	{
	// data source two
		name: 'items',
		displayKey: 'value',
		source: substringMatcher(item),
		templates: {
			header: '<h4 class="t5-sr-title">Items</h4>'
		}

	});
});