$(".t5-cat-1st")
    .mouseenter(function () {
        var path_dark = $(this).find(".t5-cat-icon").attr("src").replace("light", "dark");
        $(this).find(".t5-cat-icon").attr('src', path_dark);
    })
    .mouseleave(function () {
        var path_light = $(this).find(".t5-cat-icon").attr("src").replace("dark", "light");
        $(this).find(".t5-cat-icon").attr('src', path_light);
    });