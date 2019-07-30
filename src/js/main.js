"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// queryselectory
const value = document.querySelector('.water__number--js')
value.innerHTML = '0'


const add__button = document.querySelector('.add__button--js');

add__button.addEventListener('click', addCup)

function addCup() {
  const number = document.querySelector('.water__number--js')
  number.innerHTML = parseInt(value.innerHTML) + 1;
}

const remove__button = document.querySelector('.remove__button--js');

remove__button.addEventListener('click', removeCup)


function removeCup() {
  const currentValue = parseInt(value.innerHTML);
  if (currentValue > 0) {
    const number = document.querySelector('.water__number--js')
    number.innerHTML = parseInt(value.innerHTML) - 1;
  } else {
    const number = document.querySelector('.water__number--js')
    number.innerHTML = '0';
  }
}