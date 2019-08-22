var footer = document.getElementById("footer")
var img = document.getElementById("img")
var identity = document.getElementById("identity")
var numbering1 = document.getElementById("numbering1")
var numeral = document.getElementById("numeral")
var x = 0;
var name = localStorage.getItem("name")
var ss = localStorage.getItem("ss")
var pm = localStorage.getItem("pm")
var arr = shuffle(ss, pm);
console.log(localStorage.namew)
function shuffle(ss, pm) {
    var arr = [];
    for (var i = ss; i--;) {
        arr.push("杀手");
    }
    for (var i = pm; i--;) {
        arr.push("平民");
    }
    for (var m = arr.length; m;) {
        var i = Math.floor(Math.random() * m--);
        var t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
}
console.log(arr);
function btn() {
    //点击次数
    x += 1;
    console.log(x)
    numeral.innerHTML = Math.ceil((x + 1) / 2);
    //点击最后跳转页面
    if (x == name * 2) {
        window.location.href = "task2_3.html"
    }
    //判断奇数偶数
    if (x % 2 == 0) {
        footer.innerHTML = "查看号" + Math.ceil((x + 1) / 2) + "身份"
        numbering1.innerHTML = x
        img.src = "steam.png"
        identity.innerHTML = ''
    } else {
        footer.innerHTML = "隐藏并传递给" + Math.ceil((x + 1) / 2 + 1) + "号"
        img.src = "wow.png"
        identity.innerHTML = arr[(x - 1) / 2]
    }
    //点击最后变化法官查看
    if (x == 2 * name - 1) {
        footer.innerHTML = "法官查看"
    }
}
function rtn(){
    if(window.confirm("你确定要退出么？")){
        localStorage.clear();
        window.location.href = "task2.html"
        return true;
    }else{
        return false;
    }
}
localStorage.setItem('num',JSON.stringify(arr));