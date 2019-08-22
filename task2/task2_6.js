if (localStorage.killed) {
    var killed = JSON.parse(localStorage.killed);
}

if (localStorage.byvote) {
    var byvote = JSON.parse(localStorage.byvote);
}

if (localStorage.day) {
    var day = JSON.parse(localStorage.day);
}
var player = JSON.parse(localStorage.player);
var data = localStorage.data;
var change = JSON.parse(data);
var message = document.getElementById('message');
var killer = document.getElementById('killer');
var civilian = document.getElementById('civilian')

function digited(value) {
    var arr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    if (value < 10) {
        return arr[value];
    } else {
        return arr[9] + arr[(value - 10)];
    }
}

function again(){
    localStorage.clear();
    location = "task2.html";
}

var filterOplayer1 = player.filter(function (item, index, array) {
    return (item.id == "平民" && item.status == "dead");
});
var filterOplayer2 = player.filter(function (item, index, array) {
    return (item.id == "杀手" && item.status == "dead");
});

killer.innerHTML = "杀手" + (change[0] - filterOplayer2.length) + "人";
civilian.innerHTML = "平民" + (change[1] - filterOplayer1.length) + "人";

if (!killed) {
    message.innerHTML = '<div><p>第一天</p>' +
        '<p>白天：</p>' +
        '<p>夜晚：</p></div>';
}
for (var i = 0; i < day + 1; i++) {
    console.log(byvote);
    if (byvote && byvote[i]) {
        message.innerHTML += '<div class="bottom">' +
            '<p class="day">第' + digited(i) + '天</p>' +
            '<p class="night">白天：' + killed[i].number + '号被杀死了，真实身份是' + killed[i].id + '</p>' +
            '<p class="morning">夜晚：' + byvote[i].number + '号被投死了，真实身份是' + byvote[i].id + '</p>' +
            '</div>';
    } else {
        message.innerHTML += '<div class="bottom">' +
            '<p class="day">第' + digited(i) + '天</p>' +
            '<p class="night">白天：' + killed[i].number + '号被杀死了，真实身份是' + killed[i].id + '</p>' +
            '<p class="morning">夜晚：</p>' +
            '</div>';
    }
}

function house(){
    localStorage.clear();
    location = "task2.html";
}