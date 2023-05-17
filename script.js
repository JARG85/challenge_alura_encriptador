let boton_encriptar = document.getElementById('encriptar_boton');
let boton_desencriptar = document.getElementById('desencriptar_boton');
let texto_entrada = document.getElementById('texto_entrada');
let descripcion_no_salida = document.getElementById('descripcion_no_salida');
let imagen = document.getElementById('ilustracion');
let titulo = document.getElementById('titulo_no_salida');
let descripcion = document.getElementById('descripcion');
let copiar_boton = document.getElementById('copiar_boton');

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
    imagen.style.display = 'none';
    titulo.style.display = 'none';
    descripcion_no_salida.style.display = 'none';
    copiar_boton.style.display = 'block'
    descripcion.style.display = 'block';
    descripcion.textContent = values;
}

const colocar_imagen = () => {
    imagen.style.display = 'inline';
    titulo.style.display = 'block';
    descripcion_no_salida.style.display = 'block';
    copiar_boton.style.display = 'none'
    descripcion.style.display = 'none'
}

texto_entrada.addEventListener('input', () => {
    texto_entrada.value = limpiarEntrada(texto_entrada.value);
})

boton_encriptar.addEventListener('click', () => {
    if (texto_entrada.value.trim().length == 0) {
        colocar_imagen();
    } else {
        remover_imagen(encriptar(texto_entrada.value));
    }
})

boton_desencriptar.addEventListener('click', () => {
    if (texto_entrada.value.trim().length == 0) {
        colocar_imagen();
    } else {
        remover_imagen(descencriptar(texto_entrada.value));
    }
})

copiar_boton.addEventListener('click', () => {
    if(navigator.clipboard && window.isSecureContext){
        navigator.clipboard.writeText(encriptar(descripcion.innerText));
    }else{
        alert('Tu navegador no soporta esta funcion');
    }
})