import $ from './lib/lib';

$('.active').setAttr('data-test', 'value-3');
console.log($('.active').getAttr('data-test'));
