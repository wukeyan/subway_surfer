var arr = [145, 175, 250]

function getRandposition() {
    return arr[Math.floor(Math.random() * 3)]
}

function createCoin(bWidth, bHeight, bURL, hero) {
    var x = getRandposition()
    var y = -28
    var coin = new Coin(x, y, bWidth, bHeight, bURL)
    return coin
}

function Coin(x, y, w, h, bURL) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h

    this.image = new Image()
    this.image.src = bURL
}

Coin.prototype.draw = function (canvas) {
    var context = canvas.getContext('2d')
    context.drawImage(this.image, this.x, this.y, this.w, this.h)
}


Coin.prototype.move = function () {
    this.y += 5
}
Coin.prototype.isOutOfSreen = function () {
    if (this.y > 735) {
        return true
    } else {
        return false
    }
}


//碰撞检测
function isEnemyHitHero(obj1, obj2) {
    var minX1 = obj1.x
    var minY1 = obj1.y
    var maxX1 = obj1.x + obj1.w
    var maxY1 = obj1.y + obj1.h

    var minX2 = obj2.x
    var minY2 = obj2.y
    var maxX2 = obj2.x + obj2.w
    var maxY2 = obj2.y + obj2.h

    var minX = Math.max(minX1, minX2)
    var minY = Math.max(minY1, minY2)
    var maxX = Math.min(maxX1, maxX2)
    var maxY = Math.min(maxY1, maxY2)
    if (minX < maxX && minY < maxY) {
        return true
    } else {
        return false
    }
}