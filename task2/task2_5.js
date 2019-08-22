arr = JSON.parse(localStorage.getItem('num'))
var btn = document.getElementById('btn')
var clue = document.getElementById('clue')
var prompt = document.getElementById('prompt')
var headerSpan = document.getElementById('headerSpan')
if (localStorage.day){
    var day = JSON.parse(localStorage.day)
    console.log(day)
}
var data = localStorage.data;
var change = JSON.parse(data);
var initial = localStorage.initial;
var Currentindex = localStorage.Currentindex
console.log(Currentindex)
var player = [];
//杀死
if (localStorage.killed) {
    var killed = JSON.parse(localStorage.killed);
} else { var killed = []; }
//投死
if (localStorage.byvote) {
    var byvote = JSON.parse(localStorage.byvote);
} else { var byvote = []; }
if (localStorage.player) {
    player = JSON.parse(localStorage.player)
} else {
    for (let i = 0; i < arr.length; i++) {
        var obj = {
            name: "kill",
            number: i+1,
            status: "raw",
            id: arr[i],
            daydead: 0,
        }
        player.push(obj);
    }
}
console.log(player)
for (i = 0; i < player.length; i++) {
    if (player[i].status == "dead") {
        var inBox = //var个变量存储写进文档的标签代码，记住要转义字符
            '<li class="card" style="background:#999">\n' +
            '<strong>\n' + arr[i] +
            '</strong>\n' +
            '<span class="box">\n' + (i + 1) + "号" +
            '</span>\n' +
            '<img src="kill.png">\n' +
            '</li>';
    } else {
        var inBox = //var个变量存储写进文档的标签代码，记住要转义字符
            '<li class="card">\n' +
            '<strong>\n' + arr[i] +
            '</strong>\n' +
            '<span class="box">\n' + (i + 1) + "号" +
            '</span>\n' +
            '<img src="kill.png">\n' +
            '</li>';
    }

    $('ul').append(inBox);//通过append将盒子一个一个的往文档里面装
}
//获取当前点击下标
var butObj = document.querySelectorAll('.card');
for (var i = 0; i < arr.length; i++) {
    butObj[i].onclick = function () {
        var index = Array.prototype.indexOf.call(butObj, this);
        console.log(index);
        Currentindex = index
        console.log(Currentindex)
        localStorage.Currentindex = JSON.stringify(Currentindex);
    }
}
//渲染HTML页面
$("img").hide();
$(".card").click(function () {
    $(".box").removeClass("box1");
    $("img").css('display', 'none');
    $(this).children(".box").addClass("box1");
    $(this).children('img').show();
})
var card = document.getElementsByClassName("card");
for (var i = 0;i < card.length; i++){
    if(player[i].status == "dead"){
        card[i].style.background = '#999'
    }
}

if (initial == "vote") {
    headerSpan.innerHTML = "投票";
    clue.innerHTML = "发言讨论结束";
    prompt.innerHTML = "点击得票数最多的人的头像";
    btn.onclick = function () {
        if (!(Currentindex == undefined)) {
            if (player[Currentindex].status == "dead") {
                alert("请选择一个目标");
            } else {           
                player[Currentindex].status = "dead";
                player[Currentindex].daydead = day;
                byvote.push(player[Currentindex]);
                card[Currentindex].style.background = "#999"
                localStorage.player = JSON.stringify(player)
                localStorage.Currentindex = JSON.stringify(Currentindex);
                localStorage.byvote = JSON.stringify(byvote);
                var filterOplayer1 = player.filter(function (item, index, array) {
                    return (item.id == "平民" && item.status == "dead");
                });
                var filterOplayer2 = player.filter(function (item, index, array) {
                    return (item.id == "杀手" && item.status == "dead");
                });
                if (filterOplayer1.length == change[1] || filterOplayer2.length == change[0]) {
                    location = "task2_6.html";
                } else {
                    console.log(filterOplayer1.length == change[1] || filterOplayer2.length == change[0]);
                    day++;
                    localStorage.day = JSON.stringify(day);
                    localStorage.initial = "kill";
                    location = "task2_4.html";
                }
            }
        } else {
            alert("选择一个玩家")
        }
    }
}else{
    btn.onclick = function () {
        if (!(Currentindex == undefined)) {
            if (player[Currentindex].id == "杀手") {
                // player[Currentindex].status = 'raw'
                alert("不能杀自己哦！")
            } else if (player[Currentindex].status == "dead") {
                alert("请选择一个目标")
            } else {
                player[Currentindex].status = "dead"
                player[Currentindex].daydead = day;
                killed.push(player[Currentindex]);
                localStorage.day = JSON.stringify(day);
                localStorage.killed = JSON.stringify(killed);
                var filterOplayer1 = player.filter(function (item, index, array) {
                    return (item.id == "平民" && item.status == "dead");
                });
                var filterOplayer2 = player.filter(function (item, index, array) {
                    return (item.id == "杀手" && item.status == "dead");
                });
                if (filterOplayer1.length == change[1] || filterOplayer2.length == change[0]) {
                    location = "task2_6.html";
                } else {
                    console.log(filterOplayer1.length == change[1] || filterOplayer2.length == change[0]);
                    localStorage.initial = "undead";
                    location = "task2_4.html";
                }
            }
            localStorage.player = JSON.stringify(player);
        }else{
            alert("选择一个玩家")
        }
    }
}
function exit() {
    if (window.confirm("你确定要退出么？")) {
        localStorage.clear();
        window.location.href = "task2.html"
        return true;
    } else {
        return false;
    }
}
