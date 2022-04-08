$('img[height=150]');
$('img[src^=img/]'); //для начала строки
$('img[src$=.png]'); //для конца строки


$('nav menu li'); //вложенные елементы 
$('.icon > div'); //дочерние елементы 
$('.icon img + h4'); //соседние елементы 








$(function(){
   $(':submit').click(function(e) {
      $('.text2').attr('disabled','disabled');
      e.preventDefault();
   });
   $(':reset').click(function(e) {
      $('.text2').removeAttr('disabled');
      e.preventDefault();
   });
});