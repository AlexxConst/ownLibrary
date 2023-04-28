import $ from './lib/lib';

$('button').on('click', function () {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function () {
    console.log($(this).index());
});

console.log($('div').eq(2).find('.some'));

// $('.active').setAttr('data-test', 'value-3');

// console.log($('button').html('Hello'));
