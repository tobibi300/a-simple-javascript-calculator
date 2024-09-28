let x="" //first number
x=String(x) //its a string, so that you can type 21 and get 21 instead of 3
let y="" //second number
y=String(y)
let op //operator
let opPrssd=false //boolean that checks if an operator has been pressed
let result 
let value 
let buttonId 
function buttonClick(buttonId, value) { //function, to shorten the code
  if (!opPrssd) { //check if the operators have been pressed, so that you type first number, then an operator, and then the second number
    x = x + value;
  } else {
    y = y + value;
  }
  opPrssd ? document.getElementById("resultLabel").innerHTML = y : document.getElementById("resultLabel").innerHTML = x; //types your input out
}

document.getElementById("7Btn").onclick = function(){ 
    buttonClick("7Btn",7)
}

document.getElementById("8Btn").onclick = function(){
    buttonClick("8Btn",8)
}

document.getElementById("9Btn").onclick = function(){
    buttonClick("9Btn",9)
}

document.getElementById("4Btn").onclick = function(){
    buttonClick("4Btn",4)
}

document.getElementById("5Btn").onclick = function(){
    buttonClick("5Btn",5)
}

document.getElementById("6Btn").onclick = function(){
    buttonClick("6Btn",6)
}

document.getElementById("3Btn").onclick = function(){
    buttonClick("3Btn",3)
}

document.getElementById("2Btn").onclick = function(){
    buttonClick("2Btn",2)
}

document.getElementById("1Btn").onclick = function(){
    buttonClick("1Btn",1)
}

document.getElementById("0Btn").onclick = function(){
    buttonClick("0Btn",0)
}

document.getElementById(".Btn").onclick = function(){
    buttonClick(".Btn",".")
}

document.getElementById("divideBtn").onclick=function(){
    opPrssd=true
    op="/"
    document.getElementById("resultLabel").innerHTML=y
}
document.getElementById("multiplyBtn").onclick=function(){
    opPrssd=true
    op="*"
    document.getElementById("resultLabel").innerHTML=y
}
document.getElementById("minusBtn").onclick=function(){
    opPrssd=true
    op="-"
    document.getElementById("resultLabel").innerHTML=y
}
document.getElementById("plusBtn").onclick=function(){
    opPrssd=true
    op="+"
    document.getElementById("resultLabel").innerHTML=y
}
document.getElementById("equalBtn").onclick=function(){
    x=Number(x) //converts it to numbers to count
    y=Number(y)
    switch(op){
        case("*"):
            result=x*y
            break
        case("/"):
            if(y==0){
                result="Error, can't divide by 0"
            }
            else{
                result=x/y
            }
            break
        case("+"):
            result=x+y
            break
        case("-"):
            result=x-y
            break
    default:"Syntax error, please try again"
    }
    document.getElementById("resultLabel").innerHTML=result
}
document.getElementById("cBtn").onclick=function(){
    opPrssd=false
    x=''
    y=''
    x=String(x)
    y=String(y)
    document.getElementById("resultLabel").innerHTML=""
}
//hooray, my first ever app made by myself in jscript
