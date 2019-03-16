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



    var arrow_prev=$('.slick_custom.slick_prev');
    var arrow_next=$('.slick_custom.slick_next');
    var slick_slider=$('.slick_slider');
    var slick_slider_item=$('.slick_slider .slider_item');
    $(slick_slider).each(function(){
        if($(slick_slider_item).length >3){
            $(slick_slider).slick({
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
        $(arrow_prev).click(function(){
            $(slick_slider).slick('slickPrev');
        });

        $(arrow_next).click(function(){
            $(slick_slider).slick('slickNext');
        });

    });


    $('.file').filestyle({
        text : 'Прикрепить файл',
        dragdrop: false,
    });
    $(".phone").mask("+375 (99) 999-99-99");



});


