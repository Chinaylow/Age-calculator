var obj = document.getElementById("msg");
var ame = parseFloat(prompt('Enter your year of birth'));
function ageCalc(){
var year = 2022 - ame;
var output = `You are ${year} years old`
 return output;
}
msg.innerHTML = ageCalc()
var num = parseFloat(prompt('Enter any number'));
var obj2 = document.getElementById("txt");
function calc(){
    if (num % 5 === 0 && num % 2 === 0){
        var output2 = `${num} is divisible by 2 and 5`
    } 
    else if (num % 5 === 0){
         output2 = `${num} is divisible by 5 only`
    }
    else if (num % 2 === 0 ){
        output2 = `${num} is divisible by 2 only`
   }
    else{
        output2 = `${num} is not divisible by 2 or 5`
    }
    return output2;
}
txt.innerHTML = calc();
