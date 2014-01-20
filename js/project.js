(function ($) {
    "use strict";

    var wpstarter = {

        init: function () {
            this.bindUIActions();
        },

        bindUIActions: function () {
            $(".scroll-nav a").on("click", function (e) { wpstarter.scrollToSection(e); });
        },

        windowLoaded: function () {
            console.log("Loaded");
        },

        windowResized: function () {
            console.log("Resized");
        },

        windowScrolled: function () {
            // Improve performance while scrolling by not triggering hover events
            // http://www.thecssninja.com/javascript/pointer-events-60fps
            var body = document.documentElement;
            var timer;

            if (!body.style.pointerEvents) {
                body.style.pointerEvents = "none";
            }

            timer = setTimeout(function () {
                body.style.pointerEvents = "";
            }, 200);
        },

        scrollToSection: function (e) {
            e.preventDefault();

            var destination = (e.currentTarget.hash);
            var offset = $(destination)[0].offsetTop;

            $("body").animate({ scrollTop: offset }, 600);
        }

    };

    // DOM Ready
    $(function () { wpstarter.init(); });
    // Images Loaded
    $(window).load(function () { wpstarter.windowLoaded(); });
    // Window Resized (smart debounced event)
    $(window).bind("debouncedresize", function () { wpstarter.windowResized(); });
    // Window Scrolled
    $(window).on("scroll", function () { wpstarter.windowScrolled(); });

} (jQuery));
