document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel();
});
