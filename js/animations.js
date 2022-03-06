$(document).ready(function () {
    menuAnimate();
    imgAnimate();
    
});

function menuAnimate(){ //redirecciona al contenido mediante en menú
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

function imgAnimate(){ //maximiza la imagen al pasar el mouse encima
    $('.hover').hover(function (event) { 
        id = event.target.id
        $('#' + id).animate({ padding: '0px' }, 100);
    }, function () {
        $('#' + id).animate({ padding: '20px' }, 200);
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
});

function fixedMenu(scroll) { //menu fijo
    let nav = $('.navbar');
    if (scroll > 13) {
        nav.animate({ padding: '0px' }, 1000);
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
    if(width <= 973){
        hide.attr('data-bs-toggle','collapse');
        hide.attr('data-bs-target', '#menuNavegacion');
    }
}

function showPhotoMaster(scroll){ //animaciones en las fotos de "about"
    if (scroll > 100) {
        $('.img-master').show(1000);
    } else {
        $('.img-master').hide();
    }
}

function slideMessage(scroll){ //Desliza el mensaje de relleno
    let startSlide = positionElement("class", "ultimo");
    $('.message').width('50%');
    if (scroll > startSlide) {
        $('.message').animate({ width: '100%' }, 400);
    
    } else {
        $('.message').width('50%');
    }
}

function positionElement(type, Element){
    let position;
    if(type == "class"){
        position = parseInt($('.' + Element).offset().top);
    } else{
        position = parseInt($('#' + Element).offset().top);
    }
    return position;
}


function guiaMenu(scroll) { //indica en que seccion se encuentra al hacer scroll
    let about = parseInt($('#about').offset().top);
    let service = parseInt($('#services').offset().top);
    let testimony = parseInt($('#testimony').offset().top);
    let contact = parseInt($('#contact').offset().top);

    let actual;
    let hide = false;

    if(scroll >= 13){
        if(scroll >= about && scroll < service){
            actual = "about";
        }else{
            hide = true;
        }
        if(scroll >= service && scroll < testimony){
            actual = "services";
        }else{
            hide = true;
        }
        if(scroll >= testimony && scroll < contact){
            actual = "testimony";
        }else{
            hide = true;
        }
        if(scroll >= contact && scroll){
            actual = "contact";
        }else{
            hide = true;
        }
    }else{
        actual = "home"
    }
    if(hide){
        $('a[href*="#' + actual + '"]').addClass('text-gray');
    }else{
        $('a[href*="#' + actual + '"]').removeClass('text-gray');
    }
}