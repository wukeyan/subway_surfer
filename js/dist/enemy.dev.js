"use strict";

var arr = [84, 135, 192];

function getRandForNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandposition() {
  return arr[Math.floor(Math.random() * 3)];
}

function createEney(w, h, imgURl, canvas) {
  var enemy = new Enenmy(w, h, imgURl, canvas);
  return enemy;
}

function Enenmy(w, h, imgURl, canvas) {
  var canvasWidth = canvas.width;
  var x = getRandposition();
  this.x = x;
  this.y = -h;
  this.w = w;
  this.h = h;
  this.speed = 10;
  this.image = new Image();
  this.image.src = imgURl;
}

Enenmy.prototype.draw = function (canvas) {
  var context = canvas.getContext('2d');
  context.drawImage(this.image, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h);
};

Enenmy.prototype.move = function () {
  this.y += this.speed;
};

Enenmy.prototype.isOutOfSreen = function (canvas) {
  // alert(111111111)
  if (this.y > canvas.height) {
    return true;
  } else {
    return false;
  }
};

Enenmy.prototype.isEnemyHitHero = function (obj1, obj2) {
  //获取最小x,最小y
  var minX1 = obj1.x;
  var minY1 = obj1.y; //获取最大x,最大y

  var maxX1 = obj1.x + obj1.w;
  var maxY1 = obj1.y + obj1.h; // console.log('宽：'+obj1.w)
  // console.log('高：'+obj1.h)
  //同理

  var minX2 = obj2.x;
  var minY2 = obj2.y;
  var maxX2 = obj2.x + obj2.w;
  var maxY2 = obj2.y + obj2.h;
  var minX = Math.max(minX1, minX2);
  var minY = Math.max(minY1, minY2);
  var maxX = Math.min(maxX1, maxX2);
  var maxY = Math.min(maxY1, maxY2);

  if (minX < maxX && minY < maxY) {
    return true;
  } // if(minY1==minY2){
  //     console.log('相等了！！！！')
  //     return true
  // }
  else {
      return false;
    }
};