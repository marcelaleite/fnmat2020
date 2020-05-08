$(document).ready(function(){
  //event click
  $('.MenuSelect').on('click', function(){
    $('.MenuSelect').removeClass('itemSelectNav');
    $(this).addClass('itemSelectNav');
  });
  //scroling
  $(this).on('scroll',function(){
    //console.log($('#antes').css("margin-top"));
  });
});
document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.parallax');
   var instances = M.Parallax.init(elems, 'options');
 });

 // Or with jQuery

 /*$(document).ready(function(){
   $('.parallax').parallax();
 });

 (function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
*/