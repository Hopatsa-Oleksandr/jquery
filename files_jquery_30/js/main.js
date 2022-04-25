//Слайдер картинки

$(document).ready(function () {
    $('.small a').click(function (e) {
        if ($('.big img').attr('src') !== $(this).attr('href')) {
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
        }
        
        e.preventDefault();
    });
    
    //Кнопка
    $('.button').click(function () {
        $('.gallery').slideToggle(500);
        if ($('.button').text() == 'Open') {
            $('.button').text('Closed').attr('title', 'Закрыть').css('font-size', '15px').css('color', 'red');
        } else {
            $('.button').text('Open').attr('title', 'Открыть').css('font-size', '15px').css('color', 'blue');
        }
    });

    //Клик по изображению
    $('.small a img').click(function () {
        $('.small a img').fadeTo(500, 1).css({
            'border': 'none'
        });
        $(this).fadeTo(500, 0.6).css({
            'border': '1px dotted red'
        });
    });
});



