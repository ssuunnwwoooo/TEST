$(function(){
 
$('.menu>li').mouseover(function(){
    $('.sub,.bg').stop().fadeIn()
})
$('.menu>li').mouseout(function(){
    $('.sub,.bg').stop().fadeOut()
});


})

$(function(){


$('.open-modal').click(function(){
    $('.modal').fadeIn()
})
$('.close-modal').click(function(){
    $('.modal').fadeOut()
});

})

$(function(){

$('.tab-content>div').hide()
$('.tab-nav a').click(function(){
    $('.tab-content>div').hide().filter(this.hash).fadeIn();
    $('.tab-nav a').removeClass('active')
    $(this).addClass('active')
    return flase
}).filter(':eq(0)').click();
})

$(function(){

$('.slide-all li').eq(0).siblings().css('top' , '300px')
var slideI=0;
setInterval(function(){
    if(slideI<2){
        slideI++;
    }else{
        slideI=0;
    }
    $('.slide-all li').eq(slideI).siblings().animate({top:'300px'},500)
    $('.slide-all li').eq(slideI).animate({top:'0'},500)
},2500)



})

