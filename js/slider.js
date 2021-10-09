$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        speed: 1000,
        easing: 'linear',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        druggable: true,
        swipe: true,
        waitForAnimate: false,
        centerMode: false,
        vertical: true,
        responsive:[
            {
            breakpoint: 768,
            settings: {
                vertical: false,
                arrows: true,
                    }    
            }
        ],
        mobileFirst: true,
        appendDots:$('.pagination'),
    });
}); 