import $ from './lib/lib';

$('button').on('click', function () {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function () {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));

// console.log($('.some').closest('.findmeq').addClass('wdadwdads'));

$('button').fadeIn(1800);

// $('.active').setAttr('data-test', 'value-3');

// console.log($('button').html('Hello'));
