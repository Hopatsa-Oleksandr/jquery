//html изменения любых обьектов
// $(function () {
//   $('.mainText').html('<b>Новый заголовок</b><h2>Заголовок</h2>');
// })

//fadeOut - плавное скрытие
//fadeIn - плавное всплывание
//fadeTo - прозрачность
// $(function () {
//   $('.mainText').fadeOut(2000).fadeIn(3000);
// })

//Пример еще одной фу-нции которая скрыват наш елемент за необходимое времья
// $(function () {
//   function elementOut(element, time) {
//     if (time > 5000 || time < 1000 || isNaN(time)) {
//       return false;
//     } else {
//       var className = "." + element;
//       $(className).fadeOut(time)
//   }
//   }
//   elementOut('mainText', 800);
// })


// $(function () {
//   function newFunc() {
//     //code
//   }
//   $('.mainText').fadeTo(4000, 0.2, newFunc()).fadeTo(2000, 1); //1 - это 100%
// })


// $(function () {
//  $('.mainText').fadeTo(4000, 0.2,).fadeTo(2000, 1); //1 - это 100%
// })



//Анимация
//slideUp
//slideDown

// $(function () {
//   $('.mainText').slideUp(2000).slideDown(4000); // - Анимация для выпадающих меню
// })


//Удаление и добавление любых атрибутов для любых тегов (href, class, id, src, alt, title итд)

// $(function () {
//   var src = $('.logo img').attr('src', 'img/icon1.png');
//   alert(src);
// })

// $(function () {
//   $('.logo img').attr('title', 'Подсказка'); // надпись высвечиваеться при навидении обьекта
// })


//Удаление любого атрибута
// $(function () {
//   $('.logo img').removeAttr('src');
// })

//Изминение любого атрибута
$(function () {
  function changeAttr(element, newAttr, newVlaue) {
    var className = '.' + element;
    $(className).attr(newAttr, newVlaue);
  }
  changeAttr('logo', 'title', 'что- то новенькое добавил)');
})

//Робота с class - удаляем и добавляем
https://www.youtube.com/watch?v=9Pqf_AIT2ZI
//1:29:44

$(function () {
  // $('nav menu').addClass('border').removeClass('border');
  // $('nav menu').removeClass('border');
})

//меняем цвет тескста или меняем размер шрифта
$(function () {
  // alert($('nav menu').css('font-size'));
  // alert($('nav menu').css('color'));
  // $('nav menu li a').css('color', 'red');
  // $('nav menu li a').css('font-size', '25px')
  // $('nav menu li a').css('font-size', '25px').css('color', 'blue')
})

//меняем цвет тескста или меняем размер шрифта похожим образом как в Css
// $(function () {
//   $('nav menu li a').css({
//     'color': '#ff0000',
//     'font-size': '24px',
//     'padding': '10px'
//   });
// });

//Анимация
// $(function () {
//   $('nav menu li a').animate({
//     'font-size': '24px',
//     // 'padding-top': '10px',
//     'padding': '10px'
    
//   }, 3000, function () {
//     alert('Упешная анимация')
//   });
// });

//Добавление html тега
$(function () {
  // $('.mainText').before('<span class="before">Новый блок</span><p class="before">Абзац текта</p>');
  // $('.mainText').after('<span class="before">Новый блок</span>');
  // $('.mainText').append('<span>Новый блок</span>');
  // $('.mainText').prepend('<span>Новый блок</span>');
});

$(function () {
  // $('.before').css({
  //   'color': '#fc635e',
  //   'font-size': '24px',
  //   'padding-left': '550px',
  //   'margin': '0px'
  // });
});


//Выбор конкретных обьектов
$(function () {
  // $('.icons img').each(function () {
  //   if ($(this).attr('src')=='img/icon3.png') {
  //     $(this).fadeOut(1000);
  //   }
  // });
});

//Проверка количества тегов
$(function () {
  // alert ($('div').length);
});

//Проверка циклом

$(function () {
  for (var i = 0; i < $('li').length; i += 2) {
  // for (var i = 0; i < $('li').length; i++)
   };
});

//Клонирование елементов на html странице
https://www.youtube.com/watch?v=9Pqf_AIT2ZI
//1:53:05

$(function () {
  // var mainText = $('.mainText').clone();
  // $('body').append(mainText);
});

//Удаление елементов на html странице
$(function () {
  // var mainText = $('.mainText').remove();
  // $('nav').after(mainText);
});

//Выбор разных елементов тегов на html странице
$(function () {
  $('img, a').css('background', '#222');
  $('img[alt]').css('background', '#222');
});

//События
$(function () {
  // $('.logo').mouseover(function () {
  //   alert('Событие mouseover')
  // });
});
$(function () {
  // $('.logo').mouseout(function () {
  //   alert('Событие mouseover')
  // });
});
$(function () {
  // $('.logo').click(function () {
  //   alert('Событие mouseover')
  // });
});
$(function () {
  // $('.logo').mousemove(function () {
  //   alert('Событие mouseover')
  // });
});
$(function () {
  // $('.logo').mouseup(function () {
  //   alert('Событие mouseover')
  // });
});

$(function () {
  // Submit
  // focus
  // blur
  // change
  // reset
});

$(function () {
  keypress
  keydown
  keyup
});
//==============================Закончил на этом этапе============================================24.04.2022=====Пасха=====
https://www.youtube.com/watch?v=9Pqf_AIT2ZI
//2:04



//Цыпные функции

// $(function(){
//   var tagP = $('.mainText p').hide(3000).show(3000);
// });

// $(function(){
//   var tagP = $('.mainText p');
//   tagP.hide().text("New text").show(2000);
// });




//ниже первоначальный код с которого все начинаеться, с такой записью мы можем подключать файлы в верху

$(document).ready(function () {
  //весь код
});
//сокращение
$(function () {
  //весь код
});





// расмотрим 3 метода text hide show

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

// $(function () {
//   $(".icons > div").hide(3000).show(5000); //выбираем все елементы div в icons [div,div,div,div]
// });

//высота и ширина любого обьекта

// $(function(){
//    var w = $('.btn').width();
//      alert(w);
//      var h = $('.btn').height();
//      alert(h);
//    });

// $(function(){
//    var w = $('.mainText').width(350);
//      var h = $('.mainText').height(200);
//    });

// $(function () {
//   function widthAndHeight(element) {
//     var className = "." + element; //.btn
//     var w = $(className).width();
//     var h = $(className).height();
//     $(".mainText p").text("Ширина: " + w + "; Высота: " + h);
//   }
//   widthAndHeight("arrowDown");//btn
// });

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

https: $(function () {
  $(":submit").click(function (e) {
    $(".text2").attr("disabled", "disabled");
    e.preventDefault();
  });
  $(":reset").click(function (e) {
    $(".text2").removeAttr("disabled");
    e.preventDefault();
  });
});
