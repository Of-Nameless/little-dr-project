$(document).ready(function () {
    $('.slider').slick({
        mobileFirst: true,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        speed: 1000,
        easing: 'linear',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        responsive:[
            {   
            breakpoint: 768,
                settings: {
                    slidesToShow: 2, 
                    centerMode: true,
                    }    
            }
        ],
        
        appendDots:$('.pagination'),
    });
}); 
