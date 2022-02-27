$.getJSON("lang/lang.json", function(json){ //obtine json de idioma

    if(!localStorage.getItem("translate")){ //idioma por defecto
        localStorage.setItem("translate", "en")
    }
    let lang = localStorage.getItem("translate");
    let doc = json;
    $('.translate').each(function(index, element){
        $(this).text(doc[lang][$(this).attr('key')]);
    }); 

    $('#lang').change(function(){ //seleccionar idioma
      let lang = $("#lang").val();
      let doc = json;
        $('.translate').each(function(index, element){
          $(this).text(doc[lang][$(this).attr('key')]);
        });
    }); 
  });

