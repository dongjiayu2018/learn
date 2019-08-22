arr = JSON.parse(localStorage.getItem('num'))
for (i = 0; i < arr.length; i++) {
    var inBox = //var个变量存储写进文档的标签代码，记住要转义字符
        '<li>\n' +
        '<strong>\n' + arr[i] +
        '</strong>\n' +
        '<span>\n' + (i + 1) + "号" +
        '</span>\n' +
        '</li>';
    $('ul').append(inBox);//通过append将盒子一个一个的往文档里面装
}
function rtn() {
    if (window.confirm("你确定要退出么？")) {
        localStorage.clear();
        window.location.href = "task2.html"
        return true;
    } else {
        return false;
    }
}
function btn(){
    window.location.href = "task2_4.html"
    }