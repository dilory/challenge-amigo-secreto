let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    console.log(nombreAmigo);
    // obtiene el elemento del HTML, trim para evitar que quede el campo vacío

    if (nombreAmigo === '') {
        alert('Por favor, agrega un nombre.'); // alerta para que el usuario evite agregar un elemento vacío a la lista
    } else {
        amigos.push(nombreAmigo); // se agrega el nombre al array
        console.log(amigos);
        limpiarCaja(); // función para limpiar el input después de agregar un nombre
        enlistarAmigo(); // función para mostrar la lista de nombres que se van agregando
    }

}

function enlistarAmigo() {
    let amigoAgregado = document.getElementById('listaAmigos')
    amigoAgregado.innerHTML = "";
    // esto limpia el <ul> cada que se va a construir de nuevo la lista

    for (let i = 0; i < amigos.length; i++){
        // iniciazión; condición; actualización
        // loop para recorrer la lista, si 'i' no es menor al número total de nombres en 'amigos', el loop se detiene 
        let lista = document.createElement('li'); // crea la lista
        lista.textContent = amigos[i]; // capta el texto en el aaray y lo introduce en la lista
        amigoAgregado.appendChild(lista); // toma la nueva lista <li> y la agrega a <u> en el HTML
    }
}

function sortearAmigo(){
    // console.log(amigos.length ? 'Hay amigos disponibles' : 'La lista está vacía');
    // para verificar que el array no esté vacío al momento de sortear el amigo
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear");
        return; // return para que se detenga la funcion aquí antes del random draw
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

asignarTextoElemento('h1', '!Amigo Secreto!');
asignarTextoElemento('h2', 'Escribe el nombre de tus amigos');