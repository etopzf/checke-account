const captcha_box = document.querySelector(".numb");
const user_cap = document.getElementById("cap");
const username = document.getElementById("input-username");
const password = document.getElementById("input-password");
const key = document.getElementById("input-key");

const numbo = "0123456789";

function generate(){
    let captcha ="";
    captcha += numbo[Math.floor(Math.random()* numbo.length)];
    captcha += numbo[Math.floor(Math.random()* numbo.length)];
    captcha += numbo[Math.floor(Math.random()* numbo.length)];
    captcha += numbo[Math.floor(Math.random()* numbo.length)];

    document.querySelector(".numb").innerHTML = captcha;
}


function check(){
    if(user_cap.value == captcha){
        alert("captcha solved");
    } else if(user_cap.value == ""){
        alert("Enter captcha");
    } else{
        alert("captcha wrong");
    }
}

function button_color(){
    if(username.value !=="" && password.value !=="" && user_cap.value !=="" && key.value !==""){
        document.getElementById("btn11").style.backgroundColor ="#588bf8";
        document.getElementById("btn11").style.opacity ="0.97";
    } else{
        document.getElementById("btn11").style.backgroundColor ="#999";
    }
}





