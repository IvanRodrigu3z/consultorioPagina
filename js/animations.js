$(document).ready(function() { //rediraccionar al contenido meciante en menú
    $('a[href^="#"]').click(function() {
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
});


// animaciones al hacer scroll //

$(window).scroll(function(){ //menu fijo
    let scrollActual = $(document).scrollTop();
    let nav = $('.navbar');
    let showNav = parseInt($('#masters').offset().top);
    if(scrollActual > showNav){
        nav.addClass("fixed");
    }else if(scrollActual < showNav){
        nav.removeClass("fixed")
    }
});


$(window).scroll(function(){ //para mostrar foto de los maestros
    var scrollActual = $(document).scrollTop();
    if(scrollActual > 100){
        $('.img-master').show(1000);
    }else{
        $('.img-master').hide();
    }
});

$(window).scroll(function(){ //para mostrar servicios
    var scrollActual = $(document).scrollTop();
    var scrollService = parseInt($('.ultimo').offset().top);
    console.log("ultimo", scrollService, "scroll actual", scrollActual);
    if(scrollActual > scrollService){
        $('.message').animate({width: '100%'}, 400);
    } else{
        $('.message').width('50%');
    }
});
