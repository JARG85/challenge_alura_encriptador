let boton_encriptar_1 = document.getElementById('encriptar_boton');
let boton_desencriptar_1 = document.getElementById('desencriptar_boton');
let texto_entrada_1 = document.getElementById('texto_entrada');
let descripcion_no_salida = document.getElementById('descripcion_no_salida');
let imagen_1 = document.getElementById('ilustracion');
let titulo = document.getElementById('titulo_no_salida');
let descripcion = document.getElementById('descripcion');
let copiar_boton_1 = document.getElementById('copiar_boton');

//logica base

const encriptar = (cadena) => {
    cadena = cadena.replace(/e/g, "enter");
    cadena = cadena.replace(/i/g, "imes");
    cadena = cadena.replace(/a/g, "ai");
    cadena = cadena.replace(/o/g, "ober");
    cadena = cadena.replace(/u/g, "ufat");
    return cadena;
}

const descencriptar = (cadena) => {
    cadena = cadena.replace(/enter/g, 'e');
    cadena = cadena.replace(/imes/g, 'i');
    cadena = cadena.replace(/ai/g, 'a');
    cadena = cadena.replace(/ober/g, 'o');
    cadena = cadena.replace(/ufalt/g, 'u');
    return cadena;
}

const limpiarEntrada = (value) => {
    const valor = value.toLowerCase();
    const regex = /[^a-z\s]/gi;
    return valor.replace(regex, "");
}

const remover_imagen = (values) => {
    imagen_1.style.display = 'none';
    titulo.style.display = 'none';
    descripcion_no_salida.style.display = 'none';
    copiar_boton_1.style.display = 'block'
    descripcion.style.display = 'block';
    descripcion.textContent = values;
}

const colocar_imagen = () => {
    if (window.innerWidth >= 768) {
        imagen_1.style.display = 'inline';
    }

    titulo.style.display = 'block';
    descripcion_no_salida.style.display = 'block';
    copiar_boton_1.style.display = 'none'
    descripcion.style.display = 'none'
}

let modo_encriptar = true;

texto_entrada_1.addEventListener('input', () => {
    const texto_limpio = limpiarEntrada(texto_entrada_1.value);
    if (texto_limpio.length > 0) {
        texto_entrada_1.value = texto_limpio
        if (modo_encriptar) {
            remover_imagen(encriptar(texto_limpio))
        } else {
            remover_imagen(descencriptar(texto_limpio))
        }
    } else {
        colocar_imagen();
    }
})

boton_encriptar_1.addEventListener('click', () => {
    modo_encriptar = true;
    boton_encriptar_1.className = 'encriptar_boton'
    boton_desencriptar_1.className = 'desencriptar_boton'
})

boton_desencriptar_1.addEventListener('click', () => {
    modo_encriptar = false;
    boton_encriptar_1.className = 'desencriptar_boton'
    boton_desencriptar_1.className = 'encriptar_boton'
})

copiar_boton_1.addEventListener('click', () => {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(descripcion.innerText);
    } else {
        alert('Tu navegador no soporta esta funcion');
    }
})
