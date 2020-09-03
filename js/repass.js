'use strict';

const url = "http://35.225.64.241/api/sendEmail.php";

const email = document.getElementById("email");


enviar.onclick = () => {

    newAviso("Enviando datos...");

    var formdata = new FormData();

    formdata.append("email", email.value);

    var requestOptions = {
        headers: {
            "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*"
            
        }
    };

    console.log(requestOptions);

    axios.post(url, formdata, requestOptions)
        .then(Response => {
            console.log(Response);
            if (Response.data.error) {
                newAviso("algo ha fallado");
            } else {
                if (Response.data.changePassword) {
                    newAviso("se ha enviado un email para cambiar la contra!");
                } else {
                    newAviso("hubo un problema, intenetelo de nuevo");
                }
            }
        })
        .catch(e => {
            console.error("Error no se detecta respuesta del servidor", e);
          newAviso("Error no se detecta respuesta del servidor");
        });



}