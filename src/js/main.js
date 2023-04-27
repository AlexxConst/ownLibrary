import './lib/lib';

$('.active').on('click', sayHello);
$('.active').off('click', sayHello);

function sayHello() {
    console.log('Hello');
}
