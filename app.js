
const paragraph = document.getElementById("result");
const submitbtn = document.getElementById("submit");

submitbtn.addEventListener("click",sendData);

async function sendData(){
const input = document.getElementById("inputString").value;
if(!input){
paragraph.innerHTMl = "please enter a valid string"
return;
}
try{
const response = await fetch("/charcount",{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({data: input})
});

const data = await response.json();
paragraph.innerHTML = data.message;
}catch(error){
console.log(error)
}
}
