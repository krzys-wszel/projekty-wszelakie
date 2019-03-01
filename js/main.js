(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit', function () {
        var check = true;

        if ($(name).val().trim() == '') {
            showValidate(name);
            check = false;
        }


        if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check = false;
        }

        if ($(message).val().trim() == '') {
            showValidate(message);
            check = false;
        }

        return check;
    });
    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }




    // PRE LOADER
    $(window).load(function () {
        $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });


     

    //  team slider
    $(document).ready(function () {
        $("#team-slider").owlCarousel({
            items: 2,
            itemsDesktop: [1000, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            margin: 30,
            transitionStyle: "fade",
            pagination: false,
            navigation: true,
            navigationText: ["", ""],
            autoPlay: true
        });
    });

    //testimontial slider

    $(document).ready(function () {
        $("#testimonial-slider").owlCarousel({
            items: 1,
            itemsDesktop: [1000, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [767, 1],
            pagination: false,
            transitionStyle: "fade",
            navigation: true,
            navigationText: ["", ""],
            autoPlay: true
        });
    });

    //scrol top

    $(document).ready(() => {
        let windw = $(window);


        let topScroll = $('.top-scroll');
        topScroll.click(e => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });

        let showScrollTop = () => {
            if (windw.scrollTop() > 300) {
                topScroll.addClass('active');
            } else {
                topScroll.removeClass('active');
            }
        };

        showScrollTop();
        windw.scroll(e => {
            showScrollTop();
        });
    });

    //contact dropdown
    $(".selection-2").select2({
        minimumResultsForSearch: 20,
        dropdownParent: $('#dropDownSelect1')
    });

    // left navigation
    var $page = $('.page');

    $('.menu_toggle').on('click', function () {
        $page.toggleClass('shazam');
    });
    $('.content').on('click', function () {
        $page.removeClass('shazam');
    });


})(jQuery);
