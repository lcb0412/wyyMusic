function remSize(){
    //获取宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if(deviceWidth >= 750 ){
        deviceWidth = 750
    }
    if(deviceWidth <= 320){
        deviceWidth = 320
    }

    //设置根元素的字体大小---1rem
    document.documentElement.style.fontSize = (deviceWidth/7.5) + 'px'
    // deviceWidth/7.5=750/7.5=100   1rem=100px
}

//调用
remSize()


//窗口变化时调用
window.onresize = function(){
    remSize()
}
