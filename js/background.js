var image = new Image()

function loadBackground(bgURL, canvas, completeCallback) {
    var context = canvas.getContext('2d')
    var width = canvas.width
    var height = canvas.height


    image.onload = function (){
        context.drawImage(this,0,0,width,height)
        context.drawImage(this,0,-height,width,height)

        if(completeCallback){
            completeCallback(image)
        }
    }

    image.src = bgURL
}
//实现背景滚动
var backgroundOffset = 0
function animateBackground(canvas,speed){
    var context = canvas.getContext('2d')
    var width = canvas.width
    var height = canvas.height
    //清除画布
    context.clearRect(0,0,canvas.width,canvas.height)
    //存储画布
    context.save()
    //更新位置
    backgroundOffset+=speed
    if(backgroundOffset>=height){
        backgroundOffset = 0
    }
    context.translate(0,backgroundOffset)
    //绘制图片
    context.drawImage(image,0,0,width,height)
    context.drawImage(image,0,-height,width,height)
 //获取存储状态
 context.restore()
// window.requestAnimationFrame(animateBackground)
}
