//logica de temas para color
let boton_encriptar = document.getElementById('encriptar_boton');
let boton_desencriptar = document.getElementById('desencriptar_boton');
let copiar_boton = document.getElementById('copiar_boton');
let texto_entrada = document.getElementById('texto_entrada');
let imagen = document.getElementById('ilustracion');
let tema_azul = document.getElementById('tema_azul');
let tema_rojo = document.getElementById('tema_rojo');
let tema_verde = document.getElementById('tema_verde');
let footer = document.getElementById('footer');
let logo = document.getElementById('logo');
let links_nav = document.getElementById('links_nav');
let links_nav_2 = document.getElementById('links_nav_2');
let link_toggle = document.getElementById('link_toggle');


let custom_nav = document.getElementById('custom_nav');

const cambio_color = (color_suave, color_intenso, texto_color, link_color, logo_ruta, ilustra_ruta) => {
    if (boton_encriptar.classList.value.includes('enfocado')) {
        boton_encriptar.style.backgroundColor = color_intenso;
        boton_encriptar.style.borderColor = color_intenso;
        boton_encriptar.style.color = 'white';

        boton_desencriptar.style.borderColor = color_intenso;
        boton_desencriptar.style.color = color_intenso;
        boton_desencriptar.style.backgroundColor = color_suave;
    } else {
        boton_encriptar.style.backgroundColor = color_suave;
        boton_encriptar.style.borderColor = color_intenso;
        boton_encriptar.style.color = color_intenso;

        boton_desencriptar.style.borderColor = color_intenso;
        boton_desencriptar.style.color = 'white';
        boton_desencriptar.style.backgroundColor = color_intenso;
    }
    document.body.style.backgroundColor = color_suave;
    custom_nav.style.backgroundColor = color_intenso;
    texto_entrada.style.color = color_intenso;
    copiar_boton.style.color = color_intenso;
    copiar_boton.style.borderColor = color_intenso;
    texto_entrada.className = `texto_entrada ${texto_color}`;
    links_nav.className = `nav-link custom_a_color ${link_color}`;
    links_nav_2.className = `nav-link custom_a_color ${link_color}`;
    link_toggle.className = `nav-link dropdown-toggle custom_a_color ${link_color}`;
    logo.src = logo_ruta;
    imagen.src = ilustra_ruta;
    footer.style.backgroundColor = color_intenso;
}

tema_azul.addEventListener('click', () => {
    cambio_color('#F3F5FC', '#0A3871',
        'texto_entrada_azul', 'custom_a_color_azul',
        './assets/logo.png', './assets/Muñeco.png'
    )
})

tema_rojo.addEventListener('click', () => {
    cambio_color('#ffb9b9', '#b20000',
        'texto_entrada_rojo', 'custom_a_color_rojo',
        './assets/logo_rojo.png', './assets/Muñeco_rojo.png'
    )
})

tema_verde.addEventListener('click', () => {
    cambio_color(
        '#cdffcd', '#25b125',
        'texto_entrada_verde', 'custom_a_color_verde',
        './assets/logo_verde.png', './assets/Muñeco_verde.png'
    )
})
