let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    console.log(nombreAmigo);

    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
    }
    amigos.push(nombreAmigo);
    console.log(amigos);

}

