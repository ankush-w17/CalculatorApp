const one=document.querySelector("#one")
const two=document.querySelector("#two")
const three=document.querySelector("#three")
const four=document.querySelector("#four")
const five=document.querySelector("#five")
const six=document.querySelector("#six")
const seven=document.querySelector("#seven")
const eight=document.querySelector("#eight")
const nine=document.querySelector("#nine")
const zero=document.querySelector("#zero")
const plus=document.querySelector("#plus")
const minus=document.querySelector("#minus")
const multiply=document.querySelector("#multiply")
const divide=document.querySelector("#divide")
const dot=document.querySelector("#dot")
const equals=document.querySelector("#equals")
const clear=document.querySelector("#clear")
let input=document.querySelector("#input-field")
one.addEventListener("click",function(){
    input.value += "1"
})
two.addEventListener("click",function(){
    input.value += "2"
})
three.addEventListener("click",function(){
    input.value += "3"
})
four.addEventListener("click",function(){
    input.value += "4"
})
five.addEventListener("click",function(){
    input.value += "5"
})
six.addEventListener("click",function(){
    input.value += "6"
})
seven.addEventListener("click",function(){
    input.value += "7"
})
eight.addEventListener("click",function(){
    input.value += "8"
})
nine.addEventListener("click",function(){
    input.value += "9"
})
zero.addEventListener("click",function(){
    input.value += "0"
})
dot.addEventListener("click", function() {
    console.log("Dot button clicked");
        input.value += "."
});

function fetch(){
 let number=input.value
 input.value=""
 return number
}
let num1=null
let operator=null

function FPlus(){
 num1=fetch()
 operator='+'
}
function FMinus(){
    num1=fetch()
    operator='-'
   }
function FDivide(){
    num1=fetch()
    operator='/'
   }
function FMultiply(){
    num1=fetch()
    operator='*'
   }
   let equalsClickCount = 0
   let equalsTimer
   function FEquals() {
    let num2 = fetch()
    let sum = null
    equalsClickCount++

    if (equalsClickCount === 1) {
        equalsTimer = setTimeout(function () {
            equalsClickCount = 0
        }, 1000); 
    } else if (equalsClickCount === 2) {
      
        FClear()
        clearTimeout(equalsTimer) 
        equalsClickCount = 0 
    }
    switch (operator) {
        case '+':
            sum = parseFloat(num1) + parseFloat(num2)
            break;
        case '-':
            sum = parseFloat(num1) - parseFloat(num2)
            break;
        case '*':
            sum = parseFloat(num1) * parseFloat(num2)
            break;
        case '/':
            sum = parseFloat(num1) / parseFloat(num2)
            break;
    }

    input.value = sum
}


function FClear(){
    input.value=""
    num1=""
    num2=""
    operator=''
 }
plus.addEventListener("click",FPlus)
minus.addEventListener("click",FMinus)
divide.addEventListener("click",FDivide)
multiply.addEventListener("click",FMultiply)
equals.addEventListener("click",FEquals)
clear.addEventListener("click",FClear)

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "Enter":
            FEquals()
            break;
        case "=":
            FEquals()
            break;
        case "+":
            FPlus()
            input.value=""
            break;
        case "*":
            FMultiply()
            input.value=""
            break;
        case "/":
            FDivide()
            input.value=""
            break;
        case "-":
            FMinus()
            input.value=""
            break;
    }
});

input.addEventListener("input", function () {
    input.value = input.value.replace(/\D/g, "")
});
document.addEventListener("DOMContentLoaded", function () {
    input.focus()
});