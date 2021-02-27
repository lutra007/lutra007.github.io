$(function () {
    $('#let_shiri').each(function (i) {
        var name = "shirinv";
        var host = "ariel.ac.il";
        document.getElementById('let_shiri').innerHTML = name + "@" + host;
    });
});

$(function initNav() {
    // make drop-downs work properly with touchscreens by preventing instant hover-click
    $('#touch_menu').each(function () {
        var li = $(this);
        li.mouseover(function () {
            // store time of hover event
            li.data('hoverTime', new Date().getTime());
        });
        ('#touch_menu > #touch2 > a').click(function () {
            // only allow click if at least 50ms has elapsed since hover
            if (new Date().getTime() - li.data('hoverTime') > 50) {
                alert('Слава Ириске!')
            }
        });
    });
});

$(function () {
    $('.first').fadeIn('slow');
});

$(document).ready(function () {
    $('.hideme').each(function (i) {
        var bottom_of_object = $(this).position().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it */
        if (bottom_of_window > bottom_of_object) {
            $(this).animate({
                'opacity': '1'
            }, 700)
        }
    });
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight() / 5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 1200)
            }

        });
        $('.backtotop').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 1200)
            }
        });

    });

});
