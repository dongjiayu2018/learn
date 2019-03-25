var box = document.getElementsByClassName('box')        //获取节点
function bg3(){                                         //颜色随机
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+','+g+','+b+")";
}
function changeImage() {                                //0~9随机三个数
    var mub1 = Math.floor(Math.random() * 9);
    var mub2 = Math.floor(Math.random() * 9);
    var mub3 = Math.floor(Math.random() * 9);
    console.log(mub1)
    console.log(mub2)
    console.log(mub3)
    if (mub1 != mub2 && mub2 != mub3 && mub1 != mub3) {
        box[mub1].style.background = bg3();
        box[mub2].style.background = bg3();
        box[mub3].style.background = bg3();
    } else{
        changeImage()
    }
}
function start(){
    for(var i = 0, len = box.length ; i < len ; i++) {
        box[i].style.background = "#ffa600"
    }
}
btnone.onclick = function () { //点击开始
    c = setInterval(function () { //使用定时器
        start()
        changeImage(); //调用函数
    }, 1000) //设置时间
    
}
btntwo.onclick = function () { //停止按钮的
	for (i = 0; i < box.length; i++) { //循环
		box[i].style.background = "#FFA600"; //遍历清除颜色
	}
	clearInterval(c); //停止定时器
}