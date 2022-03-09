
function consultWsp(){
    let linkWsp = "https://api.whatsapp.com/send?phone=+573146389721&text=Hola, mi nombre es ";
    let name = document.getElementById('name').value;
    let message = document.getElementById('consult').value;
    document.getElementById('btn-wsp').setAttribute('href', linkWsp + name + ", mi consulta es. " + message);
} 