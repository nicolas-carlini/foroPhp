'use strict';

const url="http://35.225.64.241/api/signin.php";

const pwd=document.getElementById("pwd").value;
const email=document.getElementById("email").value;
const enviar=document.getElementById("enviar");

enviar.onclick= ()=>axios({
    method: 'post',
    url: url,
    data: {
    pwd: pwd,
    email: email
    }
}).then(Response=>{
    console.log(Response.data)
    if(Response.data.error){
        console.log("error");
    }
    else{
        if(Response.data.isLogged){
            console.log("esta logeado capo");
        }
        else{
            console.log("hubo un problema al loguearse, intenetelo de nuevo");
        }
    }
}).catch(e=>{console.log("Error",e)});