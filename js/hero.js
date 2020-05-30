var flag = true
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')

function createHero(w, h, canvas, imgURL, completeCallback) {
    var context = canvas.getContext('2d')
    var timer
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height

    var x = canvasWidth / 2 - w / 2 + 3
    var y = canvasHeight - h - 50

    var hero = new Hero(x, y, w, h, context, imgURL, completeCallback)



    document.onkeydown = function (event) {
        var event = event || window.event
        var keyC = event.keyCode
        switch (keyC) {
            case 37: {
                if (hero.x >= 134) {
                    hero.left = true; break
                }
                else {
                    hero.left = false; break
                }

            }
            case 38: {
                hero.up = true; break
            }
            case 39: {
                if (hero.x <= 202) {
                    hero.right = true; break
                }
                hero.right = false; break
            }
            case 40: {
                hero.down = true; break
            }
            // }
        }

    }

    document.onkeyup = function (event) {
        flag = true
        var event = event || window.event
        switch (event.keyCode) {
            case 37: {
                hero.left = false; break
            }
            case 38: {
                hero.up = false; break
            }
            case 39: {
                hero.right = false; break
            }
            case 40: {
                hero.down = false; break
            }
        }
    }

    timer = setInterval(function () {

        if (hero.left == true && hero.x >= 88 && flag == true) {
            hero.x -= 68
            flag = false
        }
        if (hero.up == true && hero.y >= 0 && flag == true) {
            hero.y -= 4
        }

        if (hero.right == true && hero.x <= 230 && flag == true) {
            hero.x += 68
            flag = false
        }
        if (hero.down == true && hero.y <= 655 && flag == true) {
            hero.y += 4
        }
    }, 1)

    bnt1.onclick = function () {
        hero.x = 108
    }
    bnt2.onclick = function () {
        hero.x = 182
    }
    bnt3.onclick = function () {
        hero.x = 252
    }
    return hero

}

function Hero(x, y, w, h, context, imgURL, completeCallback) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.context = context
    // this.imgURL = imgURL
    this.image = new Image()
    //加载图片
    this.image.onload = function () {
        if (completeCallback) {
            completeCallback(this)
        }
    }
    //添加图片源
    this.image.src = imgURL
}
Hero.prototype.draw = function (context) {
    var w = this.w
    var h = this.h
    var context = this.context
    context.drawImage(this.image, this.x, this.y, w, h)
}
