$(function(){
    $('.menu>li').mouseover(function(){
        $(this).find('.sub').stop().slideDown();
    })
    $('.menu>li').mouseout(function(){
        $(this).find('.sub').stop().slideUp();
    })
})