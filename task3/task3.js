var account = document.getElementById('account');
var password = document.getElementById('password');
var accountnumber;
var secretcode;
function login(){
    accountnumber = account.value;
    secretcode = password.value;
    // console.log(accountnumber);
    // console.log(secretcode);
    // sessionStorage.accountnumber = JSON.stringify(accountnumber);
    // sessionStorage.secretcode = JSON.stringify(secretcode);
    $.post('Post/a/login',{name:accountnumber,pwd:secretcode},'json')
}

