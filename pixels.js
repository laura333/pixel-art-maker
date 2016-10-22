"use strict";
console.log("We're making art!");

var brush;
var drawCanvas = function() {
var canvas = document.querySelector('#canvas');
var pixel;

  for (var i = 0; i < 2013; i++) {
  pixel = document.createElement('div');
  pixel.className = 'pixel';
  canvas.appendChild(pixel);
  }

  canvas.addEventListener('click', function(event) {
    if (event.target.className !== 'pixel') {
    return;
    }

  event.target.style.background = brush;
  event.target.style.borderColor = brush;
  });
};
