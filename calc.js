let numVal = "";
let calcVal = 0;

function inputZero(){
    this.numVal += "0";

    let num = "0";
    msg.innerText += num;
}

function inputOne(){
    this.numVal += "1";

    let num = "1";
    msg.innerText += num;
}

function inputTwo(){
    this.numVal += "2";

    let num = "2";
    msg.innerText += num;
}

function inputThree(){
    this.numVal += "3";

    let num = "3";
    msg.innerText += num;
}

function inputFour(){
    this.numVal += "4";

    let num = "4";
    msg.innerText += num;
}

function inputFive(){
    this.numVal += "5";

    let num = "5";
    msg.innerText += num;
}

function inputSix(){
    this.numVal += "6";

    let num = "6";
    msg.innerText += num;
}

function inputSeven(){
    this.numVal += "7";

    let num = "7";
    msg.innerText += num;
}

function inputEight(){
    this.numVal += "8";

    let num = "8";
    msg.innerText += num;
}

function inputNine(){
    this.numVal += "9";

    let num = "9";
    msg.innerText += num;
}

function clearText(){
    msg.innerText = "";
}

function calcNum(){
    let numText = Number(msg.value);
    msg.innerText = numText;
}

function tas(){
    let numVal2 = Number(this.numVal);
    this.calcVal = this.calcVal + numVal2;
    alert(this.calcVal);

    let num = "+";
    msg.innerText += num;
}