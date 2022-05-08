let swiper_mySwiper = document.getElementsByClassName("swiper-mySwiper")[0];

let slider_lis = swiper_mySwiper.querySelectorAll("li");

//console.log(slider_lis);

let i = 1;

setInterval(function(){

    if(i < slider_lis.length){

        // 前一張    
        // slider_lis[i-1].style.opacity = '0';
        slider_lis[i-1].removeAttribute("style");
        
        // 目前要進來的這張
        slider_lis[i].style.opacity = '1';
    }else{
        // slider_lis[i-1].style.opacity = '0';
        slider_lis[i-1].removeAttribute("style");
        i = 0;
        slider_lis[i].style.opacity = '1';
    }

    i = i+1;

}, 4000);



$('#shop_close').click(function(){
    $('.main__shoppingcart__container').fadeOut()
})
$('#shop__car--icon').click(function(){
    $('.main__shoppingcart__container').fadeIn()
})


// $('#shop__car--icon').click( function () {
//     console.log('test')
// })    
