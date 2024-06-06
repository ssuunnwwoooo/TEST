$(function(){
    $('.menu>li').mouseover(function(){
        $('.bg,.sub').stop().slideDown()
    })
    $('.menu>li').mouseout(function(){
        $('.bg,.sub').stop().slideUp()
    })
})
