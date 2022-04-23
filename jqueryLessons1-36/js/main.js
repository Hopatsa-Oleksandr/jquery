//ниже первоначальный код с которого все начинаеться, с такой записью мы можем подключать файлы в верху

$(document).ready(function () {
  //весь код
});
//сокращение
$(function () {
  //весь код
});
// расмотрим 3 метода text hide show

$(function () {
  //весь код
  var tagP = $(".mainText p").text();
  alert(tagP);
});

// $(function(){
//    // var tagP = $('.mainText p').text('Новый текст для тега p');
//    // alert(tagP);
//    var tagP = $('.mainText p').hide(3000); //скритые елемента
//    $('.mainText p').show(3000); //показ елемента
// });

//сокращение кода выше

// $(function(){
//    // var tagP = $('.mainText p').text('Новый текст для тега p');
//    // alert(tagP);
//    var tagP = $('.mainText p'); //скритые елемента
//    tagP.hide().text('Новый текст').show(4000); //показ елемента
// });

//автоматические цыклы

$(function () {
  $(".icons > div").hide(3000).show(5000); //выбираем все елементы div в icons [div,div,div,div]
});

//высота и ширина любого обьекта

// $(function(){
//    var w = $('.btn').width();
//      alert(w);
//      var h = $('.btn').height();
//      alert(h);
//    });

// $(function(){
//    var w = $('.mainText').width(350);
//      var h = $('.mainText').height(250);
//    });

$(function () {
  function widthAndHeight(element) {
    var className = "." + element;
    var w = $(className).width();
    var h = $(className).height();
    $(".mainText p").text("Ширина: " + w + "; Высота: " + h);
  }
  widthAndHeight("btn");
});

//Примеры как выбирать файлы по атрибутам
//фильтрация 35.09

$("menu li:even"); //Для не четных
$("menu li:odd"); //Для четных
$("img:not(.logo img)");
$("li:has(a)");
$("p:contains(client)"); //Выбираем конкретное слово со всеми тегами 'p' в котором есть указанное слово
$(".logo li:first"); //Первый елемент
$("#h2 > div + li:last"); //Последний елемент
$("div:hidden"); // все скрытые елементы
$("div:visibility"); // все видимые елементы

//www.youtube.com/watch?v=9Pqf_AIT2ZI

// $('img[height=150]');
// $('img[src^=img/]'); //для начала строки
// $('img[src$=.png]'); //для конца строки
// $('a[href*=#]') //в любом месте

// $('nav menu li'); //вложенные елементы
// $('.icon > div'); //дочерние елементы
// $('.icon img + h4'); //соседние елементы

https: https: https: $(function () {
  $(":submit").click(function (e) {
    $(".text2").attr("disabled", "disabled");
    e.preventDefault();
  });
  $(":reset").click(function (e) {
    $(".text2").removeAttr("disabled");
    e.preventDefault();
  });
});
