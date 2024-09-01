// scripts.js
function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


function toggleChats() {
    var buscadorChats = document.getElementById('buscador-chats');
    var botonMostrar = document.querySelector('.boton-mostrar');

    if (buscadorChats.style.display === 'none' || buscadorChats.style.display === '') {
        buscadorChats.style.display = 'block'; // Mostrar el contenedor
        botonMostrar.textContent = 'Ocultar Conversaciones'; // Cambiar texto del botón a 'Ocultar Conversaciones'
    } else {
        buscadorChats.style.display = 'none'; // Ocultar el contenedor
        botonMostrar.textContent = 'Mostrar Conversaciones'; // Cambiar texto del botón a 'Mostrar Conversaciones'
    }
}


function mostrarConversacion(foto, nombre) {
    // Ocultar el botón de "Mostrar Conversaciones" y el contenedor de chats
    document.querySelector('.boton-mostrar').style.display = 'none';
    if (innerWidth <= 1023) {
        document.getElementById('buscador-chats').style.display = 'none';
    }
    // Mostrar el contenedor de la conversación
    document.getElementById('conversacion').style.display = 'flex';

    // Actualizar la foto y el nombre del contacto
    document.getElementById('foto-contacto').src = foto;
    document.getElementById('nombre-contacto').textContent = nombre;
}

// Función de ejemplo para manejar el clic en un chat
document.querySelectorAll('.chat').forEach(chat => {
    chat.addEventListener('click', function () {
        const foto = this.querySelector('.foto-chat').src;
        const nombre = this.querySelector('.nombre-chat').textContent;
        mostrarConversacion(foto, nombre);
    });
});

function volverAlMenu() {
    if (innerWidth <= 1024) {
        // Mostrar el botón de "Mostrar Conversaciones" y el contenedor de chats
        document.querySelector('.boton-mostrar').style.display = 'block';
        document.getElementById('buscador-chats').style.display = 'block';

        // Ocultar el contenedor de la conversación
        document.getElementById('conversacion').style.display = 'none';
    }
    document.getElementById('conversacion').style.display = 'none';
    document.getElementById('buscador-chats').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el elemento del mensaje de Bárbara por su id
    const mensajeBarbara = document.getElementById('barbara_chat');

    // Añade un evento de clic al mensaje de Bárbara
    mensajeBarbara.addEventListener('click', function () {
        // Si el mensaje tiene texto en negrita, elimina las etiquetas <b>
        if (mensajeBarbara.innerHTML.includes('<b>')) {
            mensajeBarbara.innerHTML = mensajeBarbara.innerHTML.replace(/<b>|<\/b>/g, ''); // Elimina las etiquetas <b> y </b>
        }
    });
});
