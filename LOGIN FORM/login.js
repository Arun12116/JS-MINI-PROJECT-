var email=document.getElementById("email")
var password=document.getElementById("password")
var btn=document.getElementById("btn")

function click(){
 if(email.value=="")
 {
 alert("cannot be empty")
 }
 if(email.value!==password.value)
 {
     alert("user name and password did not match")
 }
 if(email.value.length>10)
 {
     alert("pssword less than 10 number")
 }
 
}

btn.addEventListener("click", click);