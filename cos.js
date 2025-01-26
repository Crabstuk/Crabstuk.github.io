const input = document.getElementById("input");
const output = document.getElementById("output");
fetch("https://meowfacts.herokuapp.com/")

let cosOKotach = null;
console.log(input + "" + output);
input.addEventListener("click",function(event){
fetch("https://meowfacts.herokuapp.com/") //pytanie
.then(odpowiedz => {
console.log("czy jest wszystko w porzadku", odpowiedz.ok)
return odpowiedz.json()
}).then(dane =>{
    console.log(dane.data);
     cosOKotach = dane.data;
});
output.innerText = ""
output.innerText = cosOKotach;
console.log(output.innerText)
})