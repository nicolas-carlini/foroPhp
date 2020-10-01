const cartel = document.getElementById("cartelDeAviso");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  

async function newAviso(text){
    cartel.innerHTML = text;
    cartel.className = "cartelDeAvisoON";
    await sleep(5000);
    cartel.className = "";
}

