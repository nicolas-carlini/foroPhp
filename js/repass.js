'use strict';

const url = "http://35.225.64.241/api/sendEmail.php";

const email = document.getElementById("email");


enviar.onclick = () => {


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
                console.error("algo ha fallado");
            } else {
                if (Response.data.changePassword) {
                    console.log("se ha enviado un email para cambiar la contra!");
                } else {
                    console.log("hubo un problema, intenetelo de nuevo");
                }
            }
        })
        .catch(e => {
            console.error("Error", e)
        });



}