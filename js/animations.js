$(document).ready(function () {
    menuAnimate();
    imgAnimate();
    imgHover();
    showMessageWsp()
});

function menuAnimate() { //redirecciona al contenido mediante en menú
    $('a[href^="#"]').click(function () {
        let destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
            destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top }, 500);
        return false;
    });
}

function imgAnimate() { //maximiza la imagen al pasar el mouse encima
    $('.hover').hover(function (event) {
        id = event.target.id
        $('#' + id).animate({ padding: '0px' }, 100);
    }, function () {
        $('#' + id).animate({ padding: '20px' }, 200);
    });
}

function imgHover() {
    $('.hoverimg').hover(function (event) {
        id = event.target.id
        $('#' + id).fadeIn();
    }, function () {
        $('#' + id).animate({ padding: '20px' }, 200);
    });
}

// function shadowWspBtn(){
//     setTimeout(() => {
//         $('.btn-flotante').setInterval(function(){
//             $('.btn-flotante').addClass('shadow-wsp')
//         }, 500);
//     }, 5000);
// }

function showMessageWsp(){
    $('.wsp-message').hide();
    $('.btn-flotante').hover(function(){
        $('.wsp-message').toggle(200);
    });
}


//***/ animaciones al hacer scroll ***//

$(window).scroll(function (event) {
    let scroll = $(document).scrollTop();
    let idElement = event.target.id;

    fixedMenu(scroll);
    guiaMenu(scroll);
    showPhotoMaster(scroll);
    slideMessage(scroll);
    showServices(scroll);
});

function fixedMenu(scroll) { //menu fijo
    let nav = $('.navbar');
    if (scroll > 13) {
        nav.animate({ padding: '0' }, 1000);
        nav.addClass('fixed');
        nav.removeClass('p-5');
    } else {
        nav.addClass('p-5');
        nav.removeClass("fixed");
    }

    hideMenu();
}

function hideMenu() { //oculta el menu en resoluciones pequeñas
    let width = $(window).width();
    let hide = $('.hide');
    if (width <= 973) {
        hide.attr('data-bs-toggle', 'collapse');
        hide.attr('data-bs-target', '#menuNavegacion');
    }
}

function showPhotoMaster(scroll) { //animaciones en las fotos de "about"
    if (scroll > 100) {
        $('.img-master').show(1000);
    } else {
        $('.img-master').hide();
    }
}

function slideMessage(scroll) { //Desliza el mensaje de relleno
    let startSlide = positionElement("class", "ultimo");
    $('.message').width('50%');
    if (scroll > startSlide) {
        $('.message').animate({ width: '100%' }, 400);
    } else {
        $('.message').width('50%');
    }
}

function positionElement(type, Element) {
    let position;
    if (type == "class") {
        position = parseInt($('.' + Element).offset().top);
    } else {
        position = parseInt($('#' + Element).offset().top);
    }
    return position;
}

function showServices(scroll){
    let hight = $(window).height();
    let service = positionElement("id", "services");
    let showService = service - hight;
    $('#services').hide();
    if(scroll > showService){
        $('#services').show();
    } else{
        $('#services').hide();
    }
    console.log("scroll", scroll , "posicionServ" , showService)
}

function guiaMenu(scroll) { //indica en que seccion se encuentra al hacer scroll

}