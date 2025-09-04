let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    console.log(nombreAmigo);

    if (nombreAmigo === '') {
        alert('Por favor, agrega un nombre.');
    } else {
        amigos.push(nombreAmigo);
        console.log(amigos);
        limpiarCaja();
        enlistarAmigo();
    }

}

function enlistarAmigo() {
    let amigoAgregado = document.getElementById('listaAmigos')
    amigoAgregado.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let lista = document.createElement('li');
        lista.textContent = amigos[i];
        amigoAgregado.appendChild(lista);
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

asignarTextoElemento('h1', '!Amigo Secreto!');
asignarTextoElemento('h2', 'Escribe el nombre de tus amigos');