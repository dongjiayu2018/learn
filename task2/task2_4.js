if (localStorage.player) {
    var player = JSON.parse(localStorage.player);
    console.log(player)
}
if (localStorage.byvote) {
    var byvote = JSON.parse(localStorage.byvote);
}
if (localStorage.Currentindex) {
    var Currentindex = JSON.parse(localStorage.Currentindex);
    console.log(Currentindex)
}
if (localStorage.initial) {
    var initial = localStorage.initial;
} else if (!localStorage.initial) {
    var initial = "kill";
}
if (localStorage.killed) {
    var killed = JSON.parse(localStorage.killed);
}
var kill = document.getElementsByClassName('kill');
var undead = document.getElementsByClassName('undead');
var speak = document.getElementsByClassName('speak');
var vote = document.getElementsByClassName('vote');
var step = document.getElementsByClassName('step');
var substep = document.getElementsByClassName("substep");
var day;
var player = [];
var state = localStorage.state;
var newP;
if (localStorage.day) {
    day = JSON.parse(localStorage.day);
}
if (day == undefined) {
    var day = 0;
    console.log(day);
}
for (var i = day; i > 0; i--) {
    // if (player.length == 0) {
    //     player.forEach(element => {
    //         if (player[i].status == "dead" || player[i].daydead == i) {

    //         }

    //     });
    // }
    var step =
        '<div class="content">' +
        '<div class="one" onclick="myhide(' + (i - 1) + ')">第' + digited(i - 1) + '天</div>' +
        '<div class = "main" style = "display:none;" >' +
        '<p class="kill" style="background:#999">杀手杀人' +
        '<i class="arrow" style="border-right: 8px solid #999;"></i>' +
        '</p>' +
        '<span style="display: block;margin-bottom: 8px;text-align: center;" id = "span">' + killed[i - 1].number + '号被杀手杀死，真实身份是' + killed[i - 1].id +
        '</span>' +
        '<p class="undead" style="background:#999">亡灵发表遗言' +
        '<i class="arrow" style="border-right: 8px solid #999;"></i>' +
        '</p>' +
        '<p class="speak" style="background:#999">玩家依次发言' +
        '<i class="arrow" style="border-right: 8px solid #999;"></i>' +
        '</p>' +
        '<p class="vote" style="background:#999">全民投票' +
        '<i class="arrow" style="border-right: 8px solid #999;"></i>' +
        '</p>' +
        '<span style="font-size:12px; display: block; text-align: center;">' + byvote[i - 1].number + '号被投票投死了，真实身份是' + byvote[i - 1].id + '</span>' +
        '</div>' +
        '</div>';
    $('.step').prepend(step);
    console.log(step);
    substep[0].innerHTML = "第" + digited(day) + "天";
}
function fate(){
    if(main[day].style.display == "block"){
        main[day].style.display = "none"
    }else{
        main[day].style.display ="block"
    }
}

var span = document.getElementById("span")
for (let i = 0; i < player.length; i++) {
    if (Currentindex) {
        span.style.display = "block"
    }
}

var main = document.getElementsByClassName('main')
function myhide(index) {
    if (main[index].style.display == "block") {
        main[index].style.display = "none";
    } else {
        main[index].style.display = "block";
    }
}
function digited(value) {
    var arr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    if (value < 10) {
        return arr[value];
    } else {
        return arr[9] + arr[(value - 10)];
    }
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

function murder() {
    window.location.href = "task2_5.html"
}
var fsm = new StateMachine({
    init: initial,
    transitions: [
        { name: 'one', from: 'kill', to: 'undead' },
        { name: 'two', from: 'undead', to: 'speak' },
        { name: 'three', from: 'speak', to: 'vote' },
        { name: 'five', from: 'vote', to: 'kill' }
    ],
    methods: {
        onUndead: function () {
            newP = document.createElement("p");
            newP.innerHTML = (Currentindex + 1) + "号被杀手杀死，真实身份是平民";
            main[day].insertBefore(newP, undead[day]);
            newP.style.marginBottom = "10px";
            newP.style.fontSize = "12px";
            kill[day].style.background = "#999";
            kill[day].getElementsByTagName("i")[0].style.borderRight = "8px solid #999";
            console.log(newP);
        },
        onSpeak: function () {
            if (!newP) {
                newP = document.createElement("p");
                newP.innerHTML = (Currentindex + 1) + "号被杀手杀死，真实身份是平民";
                main[day].insertBefore(newP, undead[day]);
                newP.style.marginBottom = "10px";
                newP.style.fontSize = "12px";
                kill[day].style.background = "#999";
                kill[day].getElementsByTagName("i")[0].style.borderRight = "8px solid #999";
            }
            undead[day].style.background = "#999";
            undead[day].getElementsByTagName("i")[0].style.borderRight = "8px solid #999";
            console.log(newP);
        },
        onVote: function () {
            if (!newP) {
                newP = document.createElement("p");
                newP.innerHTML = (Currentindex + 1) + "号被杀手杀死，真实身份是平民";
                main[day].insertBefore(newP, undead[day]);
                newP.style.marginBottom = "10px";
                newP.style.fontSize = "12px";
                kill[day].style.background = "#999";
                kill[day].getElementsByTagName("i")[0].style.borderRight = "8px solid #999";
            }
            undead[day].style.background = "#999";
            undead[day].getElementsByTagName("i")[0].style.borderRight = "8px solid #999";
            speak[day].style.background = "#999";
            speak[day].getElementsByTagName("i")[0].style.borderRight = "8px solid #999";
        },
    }
})
kill[day].onclick = function () {
    if (fsm.state == "kill") {
        localStorage.initial = fsm.state;
        localStorage.day = JSON.stringify(day);
        location = "task2_5.html";
    } else {
        alert("请按顺序操作");
    }
}
undead[day].onclick = function () {
    if (fsm.state == "undead") {
        alert("请死者亮明身份并且发表遗言");
        fsm.two();
        localStorage.initial = fsm.state;

    } else {
        alert("请按顺序操作");
    }
}

speak[day].onclick = function () {
    if (fsm.state == "speak") {
        alert("玩家依次发言");
        fsm.three()
        console.log(fsm.state);
        localStorage.initial = fsm.state;
    } else {
        alert("请按顺序操作");
    }
}

vote[day].onclick = function () {
    if (fsm.state == "vote") {
        localStorage.day = JSON.stringify(day);
        location = "task2_5.html";
    } else {
        alert("请按顺序操作");
    }
}