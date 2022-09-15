var btn = document.getElementById('btn');

btn.addEventListener('click',clickHandler)
function clickHandler() {
    let mail =document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;
    if ((mail=="muthu@gmail.com") && (pass.length>4)) {
        alert('success')
       
    }
    else{
        alert('fail')
        
    }
}
function emailHandler() {
    let mail =document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;
    if (mail=="muthu@gmail.com" && (pass.length>4)) {
        btn.style.display="block";
    }
    else{
        btn.style.display="none";
    }
}


var num = parseInt(prompt('enter the number'));
var temp = num;
var rem = 0;
while(temp>0){
    lastdigit = temp % 10;
    temp = temp-lastdigit;
    temp = temp/10;
    rem = rem + lastdigit;
}
console.log(rem);


var arr = [100,92,84,73,62,51,44,34,23,12];

let ascending =arr.sort((a,b)=>{
    return a-b;
})
console.log(ascending);