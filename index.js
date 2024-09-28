let x=""
x=String(x)
let y=""
y=String(y)
let op
let opPrssd=false
let result
let value
let buttonId
function buttonClick(buttonId, value) {
  if (!opPrssd) {
    x = x + value;
  } else {
    y = y + value;
  }
  opPrssd ? document.getElementById("resultLabel").innerHTML = y : document.getElementById("resultLabel").innerHTML = x;
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

document.getElementById("dvdBtn").onclick=function(){
    opPrssd=true
    op="/"
    document.getElementById("resultLabel").innerHTML=y
}
document.getElementById("multipBtn").onclick=function(){
    opPrssd=true
    op="*"
    document.getElementById("resultLabel").innerHTML=y
}
document.getElementById("mnsBtn").onclick=function(){
    opPrssd=true
    op="-"
    document.getElementById("resultLabel").innerHTML=y
}
document.getElementById("plsBtn").onclick=function(){
    opPrssd=true
    op="+"
    document.getElementById("resultLabel").innerHTML=y
}
document.getElementById("eqlBtn").onclick=function(){
    x=Number(x)
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
