'use strict';

const ip="http://35.225.64.241/api/signup.php";

const pwd=document.getElementById("pwd").value;
const email=document.getElementById("email").value;

singin() = ()=>axios({
    method: 'post',
    url: ip,
    data: {
    pwd: pwd,
    email: email
    }
}).then(Response=>{
    console.log(Response.data)
    resultado.innerHTML='';
    resultado.innerHTML+="isRegistered: "+Response.data.isRegistered+" <br>";
    resultado.innerHTML+="error: "+Response.data.error;
}).catch(e=>{console.log("Error, La contraseña o el Email estan mal",e)});