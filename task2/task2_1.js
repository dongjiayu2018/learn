var inputNumber = document.getElementById("inputNumber")
var rangeNumber = document.getElementById("rangeNumber")
var amount = document.getElementById("amount")
var amount1 = document.getElementById("amount1")
//玩家人数的输入框与滚动条同步
inputNumber.oninput = function () {
    rangeNumber.value = inputNumber.value;
    //判断小于4大于18
    if (inputNumber.value < 4 || inputNumber.value > 18) {
        amount.innerHTML = 0;
        amount1.innerHTML = 0;
    } else if (inputNumber.value == 15 || inputNumber.value == 18) {
        amount.innerHTML = Math.floor(inputNumber.value / 3 - 1);
        amount1.innerHTML =inputNumber.value -amount.innerHTML 
    } else if (inputNumber.value >= 4 || inputNumber.value <= 18) {
        amount.innerHTML = Math.floor(inputNumber.value / 3);
        amount1.innerHTML = inputNumber.value - amount.innerHTML;
    }
}
//滚动条改变玩家人数随着改变
function change() {
    inputNumber.value = rangeNumber.value;
    if (inputNumber.value < 4 || inputNumber.value > 18) { //判断小于4大于18
        amount.innerHTML = 0;
        amount1.innerHTML = 0;
    } else if (inputNumber.value == 15 || inputNumber.value == 18) {
        amount.innerHTML = Math.floor(inputNumber.value / 3 - 1);
        amount1.innerHTML =inputNumber.value -amount.innerHTML 
    } else if (inputNumber.value >= 4 || inputNumber.value <= 18) {
        amount.innerHTML = Math.floor(inputNumber.value / 3);
        amount1.innerHTML = inputNumber.value - amount.innerHTML;
    }
}
//减号按钮与滚动条同步
function btLeft() {
    rangeNumber.value--;
    if (inputNumber.value <= 4) {
        alert("人数不足，请凑好再来");
    } else {
        inputNumber.value = rangeNumber.value;
    }
    if (inputNumber.value < 4 || inputNumber.value > 18) { //判断小于4大于18
        amount.innerHTML = 0;
        amount1.innerHTML = 0;
    } else if (inputNumber.value == 15 || inputNumber.value == 18) {
        amount.innerHTML = Math.floor(inputNumber.value / 3 - 1);
        amount1.innerHTML =inputNumber.value -amount.innerHTML 
    } else if (inputNumber.value >= 4 || inputNumber.value <= 18) {
        amount.innerHTML = Math.floor(inputNumber.value / 3);
        amount1.innerHTML = inputNumber.value - amount.innerHTML;
    }
}
//加号按钮与滚动条同步
function btRight() {
    rangeNumber.value++;
    if (inputNumber.value >= 18) {
        alert("人数太多，请分开游戏");
    } else {
        inputNumber.value = rangeNumber.value;
    }
    if (inputNumber.value < 4 || inputNumber.value > 18) { //判断小于4大于18
        amount.innerHTML = 0;
        amount1.innerHTML = 0;
    } else if (inputNumber.value == 15 || inputNumber.value == 18) {
        amount.innerHTML = Math.floor(inputNumber.value / 3 - 1);
        amount1.innerHTML =inputNumber.value -amount.innerHTML 
    } else if (inputNumber.value >= 4 || inputNumber.value <= 18) {
        amount.innerHTML = Math.floor(inputNumber.value / 3);
        amount1.innerHTML = inputNumber.value - amount.innerHTML;
    }
}

function clic() {
    if (inputNumber.value < 4) {
        alert("人数不足，请凑好再来")
    } else if (inputNumber.value > 18) {
        alert("人数太多，请分开游戏")
    }else if (inputNumber.value >= 4 || inputNumber.value <= 18) {
        var data = [amount.innerHTML,amount1.innerHTML];
        var send = JSON.stringify(data);
        localStorage.data = send;
        window.location.href = "task2_2.html"
    }

    localStorage.setItem("name", inputNumber.value)
    localStorage.setItem("ss", amount.innerHTML)
    localStorage.setItem("pm", amount1.innerHTML)
}

