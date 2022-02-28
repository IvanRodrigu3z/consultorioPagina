$(document).ready(function() { //rediraccionar al contenido meciante en menú
    $('a[href^="#"]').click(function() {
      var destino = $(this.hash);
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



$(window).scroll(function(){ //para mostrar foto de los maestros
    var scrollActual = $(document).scrollTop();
    if(scrollActual > 100){
        $('.img-master').show(1000);
    }else if(scrollActual < 500){
        $('.img-master').hide();
    }
});


$(function(){ // boton ir arriba
    $('#up').click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, '1800');
    });
});