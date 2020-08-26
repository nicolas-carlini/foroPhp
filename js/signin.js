'use strict';

const url = "http://35.225.64.241/api/signin.php";

const pwd = document.getElementById("pwd");
const email = document.getElementById("email");
const enviar = document.getElementById("enviar");

enviar.onclick = () => {


    var formdata = new FormData();
    formdata.append("pwd", pwd.value);
    formdata.append("email", email.value);

    var requestOptions = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };

    console.log(requestOptions);

    axios.post(url, formdata, requestOptions)
        .then(Response => {

            if (Response.data.error) {
                console.error("algo ha fallado");
            } else {
                if (Response.data.isLogged) {
                    console.log("se ha loggeado exitosamente!");
                } else {
                    console.log("hubo un problema al logearse, intenetelo de nuevo",Response.data);
                }
            }
        })
        .catch(e => {
            console.error("Error", e)
        });

}