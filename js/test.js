$(function(){
    $('.m-1').mouseover(function(){
        $('.s-1').stop().slideDown()
    })
    $('.m-1').mouseout(function(){
        $('.s-1').stop().slideUp()
    });
    

    $('.m-2>li').mouseover(function(){
        $(this).find('.s-2').stop().slideDown();
    })
    $('.m-2>li').mouseout(function(){
        $(this).find('.s-2').stop().slideUp();
    });

    $('.m-3').mouseover(function(){
        $('.m3-bg , .s-3').stop().slideDown()
    })

    $('.m-3').mouseout(function(){
        $('.m3-bg , .s-3').stop().slideUp()
    })

    $('.m-4>li').mouseover(function(){
        $(this).find('.s-4').stop().slideDown();
    })
    $('.m-4>li').mouseout(function(){
        $(this).find('.s-4').stop().slideUp();
    })

    $('.m-5>li').mouseover(function(){
        $(this).find('.s-5').stop().fadeIn();
    })
    $('.m-5>li').mouseout(function(){
        $(this).find('.s-5').stop().fadeOut();
    })

    $('.m-6>li').mouseover(function(){
        $('.m6-bg, .s-6').stop().fadeIn()
    })
    $('.m-6>li').mouseout(function(){
        $('.m6-bg, .s-6').stop().fadeOut()
    })
})