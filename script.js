let boton_encriptar = document.getElementById('encriptar_boton');
let boton_desencriptar = document.getElementById('desencriptar_boton');
let texto_entrada = document.getElementById('texto_entrada');
let descripcion_no_salida = document.getElementById('descripcion_no_salida');
let imagen = document.getElementById('ilustracion');
let titulo = document.getElementById('titulo_no_salida');
let descripcion = document.getElementById('descripcion');
let copiar_boton = document.getElementById('copiar_boton');

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
    imagen.style.display = 'none';
    titulo.style.display = 'none';
    descripcion_no_salida.style.display = 'none';
    copiar_boton.style.display = 'block'
    descripcion.style.display = 'block';
    descripcion.textContent = values;
}

const colocar_imagen = () => {
    if (window.innerWidth >= 768) {
        imagen.style.display = 'inline';
    }

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
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(descripcion.innerText);
    } else {
        alert('Tu navegador no soporta esta funcion');
    }
})


//logica de temas para color
let tema_azul = document.getElementById('tema_azul');
let tema_rojo = document.getElementById('tema_rojo');
let tema_verde = document.getElementById('tema_verde');
let footer = document.getElementById('footer');
let logo = document.getElementById('logo');
let links_nav = document.getElementById('links_nav');
let link_toggle = document.getElementById('link_toggle');


let custom_nav = document.getElementById('custom_nav');

tema_azul.addEventListener('click', () => {
    document.body.style.backgroundColor = '#F3F5FC';
    custom_nav.style.backgroundColor = '#0A3871';
    boton_encriptar.style.backgroundColor = '#0A3871';
    footer.style.backgroundColor = '#0A3871';
    texto_entrada.style.color = '#0A3871';
    texto_entrada.className = 'texto_entrada texto_entrada_azul';
    imagen.src = './assets/Muñeco.png'
    boton_desencriptar.style.borderColor = '#0A3871'
    boton_desencriptar.style.color = '#0A3871'
    logo.src = './assets/logo.png'
    links_nav.className = 'nav-link custom_a_color custom_a_color_azul';
    link_toggle.className = 'nav-link dropdown-toggle custom_a_color custom_a_color_azul'

})

tema_rojo.addEventListener('click', () => {
    document.body.style.backgroundColor = '#ffb9b9';
    custom_nav.style.backgroundColor = '#b20000';
    boton_encriptar.style.backgroundColor = '#b20000';
    footer.style.backgroundColor = '#b20000';
    texto_entrada.style.color = '#b20000';
    texto_entrada.className = 'texto_entrada texto_entrada_rojo';
    imagen.src = './assets/Muñeco_rojo.png'
    boton_desencriptar.style.borderColor = '#b20000'
    boton_desencriptar.style.color = '#b20000'
    logo.src = './assets/logo_rojo.png'
    links_nav.className = 'nav-link custom_a_color custom_a_color_rojo';
    link_toggle.className = 'nav-link dropdown-toggle custom_a_color custom_a_color_rojo'
})

tema_verde.addEventListener('click', () => {
    document.body.style.backgroundColor = '#cdffcd';
    custom_nav.style.backgroundColor = '#25b125';
    boton_encriptar.style.backgroundColor = '#25b125';
    footer.style.backgroundColor = '#25b125';
    texto_entrada.style.color = '#25b125';
    texto_entrada.className = 'texto_entrada texto_entrada_verde';
    imagen.src = './assets/Muñeco_verde.png'
    boton_desencriptar.style.borderColor = '#25b125'
    boton_desencriptar.style.color = '#25b125'
    logo.src = './assets/logo_verde.png'
    links_nav.className = 'nav-link custom_a_color custom_a_color_verde';
    link_toggle.className = 'nav-link dropdown-toggle custom_a_color custom_a_color_verde'
})

//logica tiempo real