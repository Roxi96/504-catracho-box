$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        console.log(position); // para saber en q posicion agregar la clase de la animacion

        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    $(window).scroll(function (){
        let position = $(this).scrollTop();
        if(position >= 650){
            $('.boxes-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else{
            $('.boxes-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    });

});