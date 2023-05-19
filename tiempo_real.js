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
    cadena = cadena.replace(/ufat/g, 'u');
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
    copiar_boton_1.style.display = 'inline'
    descripcion.style.display = 'inline';
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

const getColor = () => {
    let colorState = document.getElementById('links_nav');
    switch (true) {
        case colorState.classList.value.includes('azul'):
            return (['#F3F5FC', '#0A3871'])
        case colorState.classList.value.includes('rojo'):
            return (['#ffb9b9', '#b20000'])
        case colorState.classList.value.includes('verde'):
            return (['#cdffcd', '#25b125'])
    }
}

const setColors = (colores) => {
    if (modo_encriptar) {

        boton_desencriptar_1.classList.add('enfocado');
        boton_encriptar_1.classList.remove('enfocado');

        boton_desencriptar_1.style.color = 'white';
        boton_desencriptar_1.style.backgroundColor = colores[1];
        boton_encriptar_1.style.backgroundColor = colores[0];
        boton_encriptar_1.style.borderColor = colores[1];
        boton_encriptar_1.style.color = colores[1];

    } else {

        boton_encriptar_1.classList.add('enfocado');
        boton_desencriptar_1.classList.remove('enfocado');

        boton_encriptar_1.style.color = 'white';
        boton_encriptar_1.style.backgroundColor = colores[1];
        boton_desencriptar_1.style.backgroundColor = colores[0];
        boton_desencriptar_1.style.color = colores[1];
        boton_desencriptar_1.style.borderColor = colores[1];
    }
}

boton_encriptar_1.addEventListener('click', () => {
    if (!modo_encriptar) {
        setColors(getColor());
        texto_entrada_1.value = ''
        colocar_imagen();
    }
    modo_encriptar = true;
})

boton_desencriptar_1.addEventListener('click', () => {
    if (modo_encriptar) {
        setColors(getColor());
        texto_entrada_1.value = '';
        colocar_imagen();
    }
    modo_encriptar = false;
})

copiar_boton_1.addEventListener('click', () => {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(descripcion.innerText);
    } else {
        alert('Tu navegador no soporta esta funcion');
    }
})
