$(document).ready(function () {
    $('a[href^="#"]').click(function () {//redirecciona al contenido mediante en menú
        let destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
            destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
        return false;
    });

    $('.hover').hover(function (event) { //maximiza imagen
        id = event.target.id
        $('#' + id).animate({ padding: '0px' }, 100);
    }, function () {
        $('#' + id).animate({ padding: '20px' },  200);
    });

});

// animaciones al hacer scroll //

$(window).scroll(function (event) { //menu fijo

    let scroll = $(document).scrollTop();
    let idElement = event.target.id;
    console.log("id elemento", idElement);

    let scrollActual = $(document).scrollTop();
    let nav = $('.navbar');
    let showNav = parseInt($('#masters').offset().top);
    if (scrollActual > showNav) {
        nav.addClass("fixed");
    } else if (scrollActual < showNav) {
        nav.removeClass("fixed")
    }


});

function showMaster(){}

$(window).scroll(function () { //para mostrar foto de los maestros
     var scrollActual = $(document).scrollTop();
    //$(document).scrollTop(function(e){console.log("id element", e.target.id)});
    if (scrollActual > 100) {
        $('.img-master').show(1000);
    } else {
        $('.img-master').hide();
    }
});

$(window).scroll(function () { //desliza mensaje 1
    var scrollActual = $(document).scrollTop();
    var start = parseInt($('.ultimo').offset().top);
    if (scrollActual > start) {
        $('.message').animate({ width: '100%' }, 400);
    } else {
        $('.message').width('50%');
    }
});
