'use strict';

const $body = document.body;
const $boxes = $body.querySelectorAll('.quantity');
const $btnUp = $body.querySelector('.btn-up');
const $btnDown = $body.querySelector('.btn-down');


if(document.location.href === 'file:///C:/Users/User/Desktop/vorotyntseva_test/test_Diol/index.html') {
    const $page = $body.querySelector('.index');
    const $pageNav = $body.querySelector('.main-nav-item .index');
    
    $page.classList.add('underline');
    $pageNav.classList.add('bold');
};

$btnUp.addEventListener('click', function() {
    $btnUp.classList.toggle('btn-up-click');
    $btnDown.classList.remove('btn-down-click');
})
$btnDown.addEventListener('click', function() {
    $btnDown.classList.toggle('btn-down-click');
    $btnUp.classList.remove('btn-up-click');
})

for(let i = 0; i < $boxes.length; i++) {
    $boxes[i].addEventListener('click', function(e) {
        let el = e.target;
        if(!el.classList.contains('btn-quantity')) {
            return null;
        }
        let $quantity = el.parentElement.previousElementSibling;
        const $btnPlus = this.querySelector('.btn-plus');
        const $btnMinus = this.querySelector('.btn-minus');
        let temp = $quantity.value.split(' ');
        if(el === $btnPlus) {
            temp[0]++;
            $quantity.value = temp[0] + ' ' + 'шт.';
        }
        if(el === $btnMinus && temp[0] > 0) {
            temp[0]--;
            $quantity.value = temp[0] + ' ' + 'шт.';
        }
    })
};