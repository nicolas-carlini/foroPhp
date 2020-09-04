'use strict';

const url = "https://backforo.carlini.tech/api/sendEmail.php";

const email = document.getElementById("email");


enviar.onclick = () => {

    newAviso("Enviando datos...");

    var formdata = new FormData();

    formdata.append("email", email.value);

    var requestOptions = {
        headers: {
            "Content-Type": "multipart/form-data"
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
                    newAviso("se ha enviado un email para validar!");
                    location.href="/repasswemail.html";
                } else {
                    newAviso("hubo un problema, intentelo de nuevo");
                    console.log(Response.data);
                }
            }
        })
        .catch(e => {
            console.error("Error no se detecta respuesta del servidor", e);
          newAviso("Error no se detecta respuesta del servidor");
        });



}