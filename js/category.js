/*jslint browser: true*/
/*global $, jQuery*/
$(document).ready(function () {
    "use strict";
    /*
    $('.t5-ranking-box').hover(function () {
        var specific = "." + $(this).attr('class').slice(15) + "-pic";
        $("li").siblings(".t5-pic").addClass('hidden');
        $(specific).removeClass('hidden');
    });
    */

    // init Isotope
    var $feed = $('#feed').isotope({
        itemSelector: '.list-item',
        layoutMode: 'vertical',
        filter: '*',
        vertical: {
            horizontalAlignment: 0.5
        }
    });

    // filter items when filter link is clicked
    $('#filters button').click(function () {
        var filterValue = $(this).attr('data-filter');
        $feed.isotope({
            filter: filterValue
        });
    });

    $('#filters button').click(function () {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('active')) {
            return false;
        }
        $('#filters').find('.active').removeClass('active');
        $this.addClass('active');
    });

});