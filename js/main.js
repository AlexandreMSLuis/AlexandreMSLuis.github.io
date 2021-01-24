$(document).ready(function () {

    window.open('', '_self', '');

    let $btns = $('.portfolio-area .button-group button');


    $btns.click(function (e) {

        $('.portfolio-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portfolio-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.portfolio-area .button-group #btn1').trigger('click');

    $('.portfolio-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    //owl carousel

    $('.clients-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    })

    //NAVMENU FIXED
    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area').addClass('navbar_fixed');
                } else {
                    $('.header_area').removeClass('navbar_fixed');
                }

            })
        }
    }

    navbarFixed();

    ///LINKS MENU

    $("#home_1").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top - 66
        }, 1000);
        return false;
    });

    $("#about_1").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 112
        }, 1000);
        return false;
    });

    $("#services_1").click(function () {
        $('html, body').animate({
            scrollTop: $("#services").offset().top - 112
        }, 1000);
        return false;
    });

    $("#skills_1").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top - 112
        }, 1000);
        return false;
    });

    $("#portfolio_1").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top - 112
        }, 1000);
        return false;
    });

    $("#clients_1").click(function () {
        $('html, body').animate({
            scrollTop: $("#clients").offset().top - 112
        }, 1000);
        return false;
    });

    $("#contact_1").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 112
        }, 1000);
        return false;
    });
    

    //OTHER BUTTONS

    $("#hireButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 112
        }, 1000);
        return false;
    });


    
    $("#img_logotipo_footer").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top - 66
        }, 1000);
        return false;
    });



    //YOUTUBE-OVERLAY VIDEOS  

    /*VIDEO SERVICE 1*/
    var img = $("#service_1");
    var configObject = {
        sourceUrl: img.attr("data-videourl"),
        triggerElement: "#" + img.attr("id"),
        progressCallback: function () {
            console.log("Callback Invoked.");
        }
    };
    var videoBuild = new YoutubeOverlayModule(configObject);

    videoBuild.activateDeployment();


    /*VIDEO SERVICE 2*/
    var img = $("#service_2");
    var configObject = {
        sourceUrl: img.attr("data-videourl"),
        triggerElement: "#" + img.attr("id"),
        progressCallback: function () {
            console.log("Callback Invoked.");
        }
    };
    var videoBuild = new YoutubeOverlayModule(configObject);

    videoBuild.activateDeployment();


    /*VIDEO SERVICE 3*/
    var img = $("#service_3");
    var configObject = {
        sourceUrl: img.attr("data-videourl"),
        triggerElement: "#" + img.attr("id"),
        progressCallback: function () {
            console.log("Callback Invoked.");
        }
    };
    var videoBuild = new YoutubeOverlayModule(configObject);

    videoBuild.activateDeployment();


    /*VIDEO SERVICE 4*/
    var img = $("#service_4");
    var configObject = {
        sourceUrl: img.attr("data-videourl"),
        triggerElement: "#" + img.attr("id"),
        progressCallback: function () {
            console.log("Callback Invoked.");
        }
    };
    var videoBuild = new YoutubeOverlayModule(configObject);

    videoBuild.activateDeployment();

});