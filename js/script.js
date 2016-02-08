jQuery(document).ready(function ($) {
    /*
    | -------------------
    | # Slider / Carousel
    | -------------------
    */
    $('.slider-carousel').lightSlider({
        addClass: 'slider-carousel',
        gallery:true,
        item:1,
        vertical:true,
        loop: true,
        adaptiveHeight: true,
        verticalHeight: 367,
        vThumbWidth: 126,
        thumbItem: 4,
        // thumbMargin: 5,
        // slideMargin: 5,
        keyPress: true,
        controls: false,
    });

    /*
    | -------------
    | # News Ticker
    | -------------
    */
    $('.newsticker').newsTicker({
        row_height: 150,
        max_rows: 3,
        autostart: 1,
        duration: 5000,
    });

    /*
    | ---------
    | # Sign Up
    | ---------
    */
    $('.newsletter-form .btn').click(function(e){
        e.preventDefault();
        if( $(this).hasClass('send') )
        {
            // send...
        } else {
            $(this).parents('form').find('input').removeClass('hidden').fadeIn();
            $(this).addClass('send');
        }
    });
});