$(document).ready(function() { 
    $('a[href^="#"]').click(function() {//rediraccionar al contenido meciante en menú
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

$(window).scroll(function(){ //desliza mensaje 1
    var scrollActual = $(document).scrollTop();
    var start = parseInt($('.ultimo').offset().top);
    console.log("ultimo", start, "scroll actual", scrollActual);
    if(scrollActual > start){
        $('.message').animate({width: '100%'}, 400);
    } else{
        $('.message').width('50%');
    }
});
