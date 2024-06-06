$(function(){
    $('.menu>li').mouseover(function(){
        $('.sub,.bg').stop().slideDown();
    })
    $('.menu>li').mouseout(function(){
        $('.sub,.bg').stop().slideUp();
    });

    $('.slide-all li').eq(0).siblings().css('left','-100vw')
    var slideI=0;
    setInterval(function(){
        if(slideI<2){
            slideI++;
        }else {
            slideI=0;
        }
        $('.slide-all li').eq(slideI).siblings().animate({left:'-100vw'},500)
        $('.slide-all li').eq(slideI).animate({left:'0'},500)
    },2500);

    $('.tab-content>div').hide()
    $('.tab-nav a').click(function(){
        $('.tab-content>div').hide().filter(this.hash).fadeIn();
        $('.tab-nav a').removeClass('active')
        $(this).addClass('active')
        return false
    }
).filter(':eq(0)').click();



    $('.open-modal').click(function(){
        $('.modal').fadeIn()
        return false
    })
    $('.close-modal').click(function(){
        $('.modal').fadeOut()
        return false
    })
})