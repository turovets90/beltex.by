$(document).ready(function(){

    $('.hamburger').click(function () {
        $('.main_menu').slideToggle();
        $(this).toggleClass('act');
    });


    if($('.main_slider .slider_item').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            fade:true,
            speed: 1000,
            //autoplay: true,
            //autoplaySpeed: 2000,
        });
    }

    $('.custom_item_title').click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });


    if($(".our_specialists .slider_item").length >3){
        $('.our_specialists').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 1,
                    }
                }

            ]
        });
    }
    $('.specialists_prev').click(function(){
        $('.our_specialists').slick('slickPrev');
    });

    $('.specialists_next').click(function(){
        $('.our_specialists').slick('slickNext');
    });


    if($(".reviews_slider .slider_item").length >3){
        $('.reviews_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 1,
                    }
                }

            ]
        });
    }
    $('.reviews_prev').click(function(){
        $('.reviews_slider').slick('slickPrev');
    });

    $('.reviews_next').click(function(){
        $('.reviews_slider').slick('slickNext');
    });


    $('.file').filestyle({
        text : 'Прикрепить файл',
        dragdrop: false,
    });
    $(".phone").mask("+375 (99) 999-99-99");


    $('.main_menu .arrow').click(function(){
        $(this).toggleClass('rotate');
        $(this).next().slideToggle();
    });

});


