document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, 'options');
});

// Or with jQuery

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

    function mostrarAtivo(tag){
    var tag_li = document.getElementById('lista_menu');
    var tag_a = tag_li.getElementsByTagName('a');
    for (i=0; i<tag_a.length; i++ )
    {
       tag_a[i].style.color = "";
    }
       tag.style.color = "#ff0000";
    };
